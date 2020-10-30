import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/icons/Menu';
import Button from 'components/CustomButtons/Button';

import AdminNavbarLinks from './AdminNavbarLinks';
import headerStyle from './headerStyle';

const Header = ({ ...props }) => {
	function makeBrand() {
		var name;
		props.routes.map(prop => {
			if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
				name = props.rtlActive ? prop.rtlName : prop.name;
			}
			return null;
		});
		return name;
	}
	const { classes, color, handleDrawerToggle, dispatch, history } = props;
	const appBarClasses = classNames({
		[' ' + classes[color]]: color,
	});
	return (
		<AppBar className={classes.appBar + appBarClasses}>
			<Toolbar className={classes.container}>
				<div className={classes.flex}>
					<Button color="transparent" href="#" className={classes.title}>
						{makeBrand()}
					</Button>
				</div>
				<Hidden smDown implementation="css">
					<AdminNavbarLinks dispatch={dispatch} history={history} />
				</Hidden>
				<Hidden mdUp implementation="css">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
	rtlActive: PropTypes.bool,
	handleDrawerToggle: PropTypes.func,
	routes: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(headerStyle)(Header);
