import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import app from './appReducer';
import ui from './uiReducer';
import notification from './notificationReducer';
import snackbar from './snackbarReducer';
import entities from './entitiesReducer';
import reset from './resetReducer';

const rootReducers = combineReducers({
	app,
	ui,
	notification,
	snackbar,
	entities,
	reset,
	sessionReducer,
});

export default rootReducers;
