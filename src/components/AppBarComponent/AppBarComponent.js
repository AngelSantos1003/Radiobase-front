import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import handleResetEntity from 'util/HandleResetEntity';
import auth from 'constants/auth';

class AppBarComponent extends Component {
	render() {
		const { nombre, history, dispatch } = this.props;

		return (
			<Fragment>
				<AppBar position="relative">
					<Toolbar style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<IconButton
							style={{
								marginLeft: -12,
								marginRight: 20,
							}}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit">
							{nombre}
						</Typography>
						<Button
							color="inherit"
							onClick={() => {
								auth.signout(() => {
									handleResetEntity(dispatch, 'auth', 'userProfile', {});
									history.push('/');
								});
							}}
						>
							Cerrar Session
						</Button>
					</Toolbar>
				</AppBar>
			</Fragment>
		);
	}
}

export default AppBarComponent;
