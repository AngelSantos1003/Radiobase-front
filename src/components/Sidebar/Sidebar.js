import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import AdminNavbarLinks from 'components/Navbars/AdminNavbarLinks';

import sidebarStyle from './sidebarStyle';

const Sidebar = ({ ...props }) => {
	const activeRoute = routeName => {
		return window.location.href.indexOf(routeName) > -1 ? true : false;
	};
	const { classes, color, logo, image, logoText, routes, handleDrawerToggle, open } = props;
	const links = (
		<List className={classes.list}>
			{routes.map((prop, key) => {
				let listItemClasses;
				listItemClasses = classNames({
					[' ' + classes[color]]: activeRoute(prop.layout + prop.path),
				});

				const whiteFontClasses = classNames({
					[' ' + classes.whiteFont]: activeRoute(prop.layout + prop.path),
				});
				return (
					<NavLink
						to={prop.layout + prop.path}
						className={classes.item}
						activeClassName="active"
						key={key}
					>
						<ListItem button className={classes.itemLink + listItemClasses}>
							{typeof prop.icon === 'string' ? (
								<Icon className={classNames(classes.itemIcon, whiteFontClasses)}>
									{prop.icon}
								</Icon>
							) : (
								<prop.icon
									className={classNames(classes.itemIcon, whiteFontClasses)}
								/>
							)}
							<ListItemText
								primary={prop.name}
								className={classNames(classes.itemText, whiteFontClasses)}
								disableTypography
							/>
						</ListItem>
					</NavLink>
				);
			})}
		</List>
	);
	const brand = (
		<div className={classes.logo}>
			<div className={classNames(classes.logoLink)} target="blank">
				<div className={classes.logoImage}>
					<img src={logo} alt="logo" className={classes.img} />
				</div>
				{logoText}
			</div>
		</div>
	);
	return (
		<div>
			<Hidden mdUp implementation="css">
				<Drawer
					variant="temporary"
					anchor="right"
					open={open}
					classes={{
						paper: classNames(classes.drawerPaper),
					}}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
				>
					{brand}
					<div className={classes.sidebarWrapper}>
						<AdminNavbarLinks />
						{links}
					</div>
					{image !== undefined ? (
						<div
							className={classes.background}
							style={{ backgroundImage: 'url(' + image + ')' }}
						/>
					) : null}
				</Drawer>
			</Hidden>
			<Hidden smDown implementation="css">
				<Drawer
					anchor="left"
					variant="permanent"
					open
					classes={{
						paper: classNames(classes.drawerPaper),
					}}
				>
					{brand}
					<div className={classes.sidebarWrapper}>{links}</div>
					{image !== undefined ? (
						<div
							className={classes.background}
							style={{ backgroundImage: 'url(' + image + ')' }}
						/>
					) : null}
				</Drawer>
			</Hidden>
		</div>
	);
};

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired,
	handleDrawerToggle: PropTypes.func,
	bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
	logo: PropTypes.string,
	image: PropTypes.string,
	logoText: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
};

export default withStyles(sidebarStyle)(Sidebar);
