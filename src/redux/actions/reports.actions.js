import { SET_ACTION } from 'actions/getter.actions';

export const REPORTS = 'REPORTS';

// Action creators

export const setReports = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'projects',
		module: 'reports',
	},
});
