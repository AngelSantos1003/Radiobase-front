import '@babel/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Provider } from 'react-redux';
import enLocale from 'date-fns/locale/es';
import configureStore from './redux/store';
import 'flexboxgrid/dist/flexboxgrid.css';
import App from './App';
import 'moment/locale/es';

const store = configureStore();

const renderApp = () => {
	ReactDom.render(
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
			<Provider store={store}>
				<App />
			</Provider>
		</MuiPickersUtilsProvider>,
		document.getElementById('root')
	);
};

renderApp();

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextRootContainer = require('./App.js').default;
		ReactDom.render(<NextRootContainer />, document.getElementById('root'));
	});
}
