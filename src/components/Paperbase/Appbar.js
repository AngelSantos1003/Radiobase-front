import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Notifications from '@material-ui/icons/Notifications';
import Help from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Menu from 'components/Paperbase/Menu';
import Pantalla from 'components/Paperbase/Pantalla';
import { Grid, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import handleResetEntity from 'util/HandleResetEntity';
import auth from 'constants/auth';

const drawerWidth = 256;

const styles = theme => ({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		background: '#18202c',
		padding: 0,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
});

class Appbar extends React.Component {
	state = {
		open: false,
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme, history, dispatch } = this.props;
		const { open, value } = this.state;

		return (
			<div style={{ height: '100%' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					<CssBaseline />
					<AppBar
						position="relative"
						style={{
							background: '#009be5',
						}}
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open,
						})}
					>
						<Toolbar disableGutters={!open}>
							<Grid
								container
								spacing={24}
								style={{
									display: 'flex',
									padding: 2,
									paddindLeft: 24,
									paddingRight: 24,
								}}
							>
								<Grid
									item
									xs={12}
									style={{
										display: 'flex',
										padding: 0,
										margin: 0,
										paddingTop: 5,
									}}
									justify="flex-end"
									alignItems="center"
								>
									<Typography
										variant="h6"
										color="#fff"
										noWrap
										style={{ fontSize: 14 }}
									>
										Ve a Docs
									</Typography>
									<Tooltip title="Alerta • Sin alertas">
										<IconButton color="inherit">
											<Notifications />
										</IconButton>
									</Tooltip>
									<Avatar
										alt=""
										src="https://material-ui.com/static/images/avatar/1.jpg"
										style={{ margin: 10 }}
									/>
									<Button
										color="inherit"
										onClick={() => {
											auth.signout(() => {
												handleResetEntity(
													dispatch,
													'auth',
													'userProfile',
													{}
												);
												history.push('/login');
											});
										}}
									>
										Cerrar Session
									</Button>
									<Tooltip title="Ayuda">
										<IconButton color="inherit">
											<Help />
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid
									item
									xs={10}
									style={{ display: 'flex', padding: 0, margin: 0 }}
								>
									<IconButton
										color="inherit"
										aria-label="Open drawer"
										onClick={this.handleDrawerOpen}
										style={{
											marginRight: 5,
										}}
										className={classNames(open && classes.hide)}
									>
										<MenuIcon />
									</IconButton>
									<Typography
										variant="h6"
										color="inherit"
										style={{ fontSize: 26 }}
										noWrap
									>
										Autenticación
									</Typography>
								</Grid>
								<Grid
									item
									xs={2}
									style={{ display: 'flex', padding: 0, margin: 0 }}
									justify="flex-end"
								/>
								<Grid item xs={12} style={{ display: 'flex', margin: 0 }}>
									<Tabs value={value} onChange={this.handleChange}>
										<Tab
											label="Usuarios"
											style={{
												fontSize: 10,
												minWidth: 'auto',
											}}
										/>
										<Tab
											label="Método de sesión"
											style={{
												fontSize: 10,
												minWidth: 'auto',
											}}
										/>
										<Tab
											label="Plantillas"
											style={{
												fontSize: 10,
												minWidth: 'auto',
											}}
										/>
										<Tab
											label="Uso"
											style={{
												fontSize: 10,
												minWidth: 'auto',
											}}
										/>
									</Tabs>
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>
					<Drawer
						className={classes.drawer}
						variant="persistent"
						anchor="left"
						open={open}
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						<div className={classes.drawerHeader}>
							<img
								src="#"
								style={{ width: 200 }}
								alt=""
							/>
							<IconButton
								onClick={this.handleDrawerClose}
								style={{
									background: '#fff',
								}}
							>
								{theme.direction === 'ltr' ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
						</div>
						<Divider />
						<Menu />
					</Drawer>
				</div>
				<div>
					<main
						className={classNames(classes.content, {
							[classes.contentShift]: open,
						})}
						style={{
							background: '#eaeff1',
						}}
					>
						<Pantalla />
					</main>
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Appbar);
