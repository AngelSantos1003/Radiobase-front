import { SET_ACTION } from 'actions/getter.actions';

export const CHARTS = 'CHARTS';
export const CHARTSCORRECT = `[${CHARTS} peticion correcta]`;

export const setChartsData = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Charts',
		module: 'dataCharts',
	},
});

export const setChartsData2 = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Charts',
		module: 'dataCharts2',
	},
});

export const setChartsData3 = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Charts',
		module: 'dataCharts3',
	},
});

export const setChartsData4 = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Charts',
		module: 'dataCharts4',
	},
});

export const setSourceData = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Charts',
		module: 'dataSource',
	},
});
