import { SET_ACTION } from 'actions/getter.actions';

export const PMS = 'PMS';
export const PM = `[${PMS} Obtenida]`;

export const getPms = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Pms',
		module: 'dataPms',
	},
});
