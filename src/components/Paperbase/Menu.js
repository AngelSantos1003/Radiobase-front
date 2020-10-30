import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Home } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

function Menu() {
	return (
		<Grid style={{ color: '#fff' }} direction="row" justify="flex-start" alignItems="stretch">
			<List>
				<MenuItem
					style={{
						background: '#232f3e',
						color: '#fff',
						fontSize: 24,
						paddingTop: 16,
						paddingBottom: 16,
					}}
				>
					<Typography variant="inherit">PaperBase</Typography>
				</MenuItem>
				<Divider style={{ background: 'rgba(255,255,255, .4)' }} />
				<MenuItem
					style={{
						background: '#232f3e',
						color: '#fff',
						fontSize: 14,
						paddingTop: 16,
						paddingBottom: 16,
					}}
				>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<Typography variant="inherit">Project Overview</Typography>
				</MenuItem>
				<Divider style={{ background: 'rgba(255,255,255, .4)' }} />
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 20,
						paddingTop: 16,
						paddingBottom: 16,
					}}
				>
					<Typography variant="inherit">Develop</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Authenticacion</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Database</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Storage</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Hosting</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Functions</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">ML Kit</Typography>
				</MenuItem>
				<Divider style={{ background: 'rgba(255,255,255, .4)' }} />
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 20,
						paddingTop: 16,
						paddingBottom: 16,
					}}
				>
					<Typography variant="inherit">Quality</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Analytics</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Performance</Typography>
				</MenuItem>
				<MenuItem
					style={{
						color: 'inherit',
						fontSize: 14,
						paddingTop: 4,
						paddingBottom: 4,
					}}
				>
					<Typography variant="inherit">Test Lab</Typography>
				</MenuItem>
			</List>
		</Grid>
	);
}

export default Menu;
