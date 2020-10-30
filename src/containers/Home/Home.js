import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import withStyles from '@material-ui/core/styles/withStyles';
import Navbar from 'components/Navbars/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import routes from 'constants/Menu';
import { getAppSelector } from 'selectors/appSelector';
import getSessionState from 'selectors/SessionSelector';
import getTokenLogin from 'selectors/loginSelector';

import dashboardStyle from './dashboardStyle';

let ps;

const switchRoutes = (
	<Switch>
		{routes.map(prop => {
			return (
				<Route
					path={prop.layout + prop.path}
					component={prop.component}
					key={prop.layout}
				/>
			);
		})}
		<Redirect from="/home" to="/home/dashboard" />
	</Switch>
);

@connect(store => ({
	AppSelector: getAppSelector(store),
	token: getTokenLogin(store),
	session: getSessionState(store),
}))
class Dashboard extends React.Component {
	state = {
		image: '',
		color: 'blue',
		hasImage: true,
		fixedClasses: 'dropdown show',
		mobileOpen: false,
	};
	mainPanel = React.createRef();

	componentDidMount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps = new PerfectScrollbar(this.mainPanel.current);
		}
		window.addEventListener('resize', this.resizeFunction);
	}
	componentDidUpdate(e) {
		const { mobileOpen } = this.state;
		if (e.history.location.pathname !== e.location.pathname) {
			this.mainPanel.current.scrollTop = 0;
			if (mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}

	componentWillUnmount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps.destroy();
		}
		window.removeEventListener('resize', this.resizeFunction);
	}

	handleColorClick = color => {
		this.setState({ color: color });
	};
	handleFixedClick = () => {
		const { fixedClasses } = this.state;
		if (fixedClasses === 'dropdown') {
			this.setState({ fixedClasses: 'dropdown show' });
		} else {
			this.setState({ fixedClasses: 'dropdown' });
		}
	};
	handleDrawerToggle = () => {
		const { mobileOpen } = this.state;
		this.setState({ mobileOpen: !mobileOpen });
	};
	handleImageClick = image => {
		this.setState({ image: image });
	};
	resizeFunction = () => {
		if (window.innerWidth >= 960) {
			this.setState({ mobileOpen: false });
		}
	};

	render() {
		const { dispatch } = this.props;
		const { classes, ...rest } = this.props;
		const { image, mobileOpen, color } = this.state;
		return (
			<div className={classes.wrapper}>
				<Sidebar
					routes={routes}
					logoText="Telcel"
					logo="https://i.blogs.es/95f1a9/telcel/1366_2000.jpg"
					image={image}
					handleDrawerToggle={this.handleDrawerToggle}
					open={mobileOpen}
					color={color}
					{...rest}
				/>
				<div className={classes.mainPanel} ref={this.mainPanel}>
					<Navbar
						routes={routes}
						dispatch={dispatch}
						handleDrawerToggle={this.handleDrawerToggle}
						{...rest}
					/>
					<div className={classes.content}>
						<div className={classes.container}>{switchRoutes}</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
