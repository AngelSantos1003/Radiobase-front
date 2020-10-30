import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DynamicImport from 'constants/DynamicImport';
import { getAppSelector } from 'selectors/appSelector';
import getSessionState from 'selectors/SessionSelector';
import getTokenLogin from 'selectors/loginSelector';
import './materialStyle.css';

const Progress = DynamicImport('components/Progressing/Progressing');
const Notifications = DynamicImport('components/Notifications/Notifications');
const SnackBar = DynamicImport('components/SnackBars/SnackBars');
const Home = DynamicImport('containers/Home/Home');

@connect(store => ({
	AppSelector: getAppSelector(store),
	token: getTokenLogin(store),
	session: getSessionState(store),
}))
class App extends Component {
	render() {
		const { session } = this.props;
		const { checked, authenticated } = session;
		return (
			<Router>
				<Fragment>
					{checked && (
						<Fragment>
							<Switch>
								<Route
									path="/home"
									component={Home}
									authenticated={authenticated}
								/>
								<Redirect from="/" to="/home/dashboard" />
							</Switch>
						</Fragment>
					)}
					<Progress />
					<Notifications />
					<SnackBar />
				</Fragment>
			</Router>
		);
	}
}

export default App;
