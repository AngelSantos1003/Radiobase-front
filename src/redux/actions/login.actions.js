import { SET_ACTION } from 'actions/getter.actions';

export const LOGIN = 'LOGIN';
export const LOGGEDD = `[${LOGIN} login correcto]`;
export const FORGOTPASSWORD = 'FORGOTPASSWORD';

// Action creators

export const setLogedd = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'auth',
		module: 'userProfile',
	},
});

export const setForgotPassword = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'auth',
		module: 'forgotPassword',
	},
});
