import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';

import customTabsStyle from './customTabsStyle';

class CustomTabs extends React.Component {
	state = {
		value: 0,
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};
	render() {
		const { classes, headerColor, plainTabs, tabs, title, rtlActive } = this.props;
		const cardTitle = classNames({
			[classes.cardTitle]: true,
			[classes.cardTitleRTL]: rtlActive,
		});
		const { value } = this.state;
		return (
			<Card plain={plainTabs}>
				<CardHeader color={headerColor} plain={plainTabs}>
					{title !== undefined ? <div className={cardTitle}>{title}</div> : null}
					<Tabs
						value={value}
						onChange={this.handleChange}
						classes={{
							root: classes.tabsRoot,
							indicator: classes.displayNone,
							scrollButtons: classes.displayNone,
						}}
						variant="scrollable"
						scrollButtons="auto"
					>
						{tabs.map((prop, key) => {
							var icon = {};
							if (prop.tabIcon) {
								icon = {
									icon: <prop.tabIcon />,
								};
							}
							return (
								<Tab
									classes={{
										root: classes.tabRootButton,
										selected: classes.tabSelected,
										wrapper: classes.tabWrapper,
									}}
									key={key}
									label={prop.tabName}
									{...icon}
								/>
							);
						})}
					</Tabs>
				</CardHeader>
				<CardBody>
					{tabs.map((prop, key) => {
						if (key === value) {
							return <div key={key}>{prop.tabContent}</div>;
						}
						return null;
					})}
				</CardBody>
			</Card>
		);
	}
}

CustomTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	headerColor: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'rose']),
	title: PropTypes.string,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabName: PropTypes.string.isRequired,
			tabIcon: PropTypes.object,
			tabContent: PropTypes.node.isRequired,
		})
	),
	rtlActive: PropTypes.bool,
	plainTabs: PropTypes.bool,
};

export default withStyles(customTabsStyle)(CustomTabs);
