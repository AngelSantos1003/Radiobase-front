import { SET_ACTION } from 'actions/getter.actions';

export const PROJECTS = 'PROJECTS';

// Action creators

export const setProjects = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'projects',
		module: 'allProjects',
	},
});
