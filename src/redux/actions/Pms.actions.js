import { SET_ACTION } from 'actions/getter.actions';

export const PMS = 'PMS';
export const PM = `[${PMS} PMS obtenidos]`;

//ACTIONS creators

export const getPm = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Pms',
		module: 'dataPms',
	},
});
