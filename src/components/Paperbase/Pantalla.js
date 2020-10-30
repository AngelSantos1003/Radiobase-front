import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Typography, Table } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function TabContainer(props) {
	const { children, dir } = props;

	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
			{children}
		</Typography>
	);
}
const drawerWidth = 256;

const styles = theme => ({
	root: {
		display: 'flex',
	},
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
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
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
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
});

class Pantalla extends React.Component {
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
		const { classes } = this.props;
		const { value } = this.state;
		return (
			<Grid
				container
				style={{
					justifyContent: 'space-evenly',
					height: '100%',
					width: '100%',
					margin: 0,
				}}
			>
				<div className={classes.drawerHeader} style={{ height: '100%' }} />
				{value === 0 && (
					<Grid>
						<TabContainer
							style={{
								maxWidth: 936,
								margin: 'auto',
							}}
						>
							<Paper>
								<Table
									style={{
										margin: 'auto',
										overflow: 'hidden',
										maxWidth: 936,
									}}
								>
									<TableHead
										style={{
											background: 'rgba(0, 0, 0, 0.12)',
										}}
									>
										<TableRow>
											<TableCell>
												<SearchIcon
													className={classes.block}
													color="inherit"
												/>
											</TableCell>
											<TableCell align="right">
												<TextField
													fullWidth
													placeholder="Buscar"
													InputProps={{
														disableUnderline: true,
														className: classes.searchInput,
													}}
												/>
											</TableCell>
											<TableCell align="right">
												<Button
													variant="contained"
													style={{
														background: '#009be5',
													}}
													className={classes.addUser}
												>
													Agregar Usuario
												</Button>
											</TableCell>
											<TableCell align="right">
												<Tooltip title="Reload">
													<IconButton>
														<RefreshIcon
															className={classes.block}
															color="inherit"
														/>
													</IconButton>
												</Tooltip>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<Typography
											style={{
												marginTop: 40,
												marginRight: 16,
												marginBottom: 40,
												marginLeft: 16,
												color: 'rgba(0, 0, 0, 0.54)',
											}}
										>
											sd
										</Typography>
									</TableBody>
								</Table>
							</Paper>
						</TabContainer>
					</Grid>
				)}
			</Grid>
		);
	}
}

Pantalla.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Pantalla);
