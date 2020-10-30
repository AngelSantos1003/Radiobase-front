import { createSelector } from 'reselect';

//Selectores
const chartsData = state => state.entities.Charts;
const chartsData2 = state => state.entities.Charts2;

//Reselect
export const getDataChartUno = createSelector([chartsData], chartsData => {
	return chartsData.dataCharts;
});

//Reselect
export const getDataChartDos = createSelector([chartsData], chartsData => {
	return chartsData.dataCharts2;
});

//Reselect
export const getDataChartTres = createSelector([chartsData], chartsData => {
	return chartsData.dataCharts3;
});

//Reselect
export const getDataChartCuatro = createSelector([chartsData], chartsData => {
	return chartsData.dataCharts4;
});

//Reselect
export const getDataSourceSelector = createSelector([chartsData], chartsData => {
	return chartsData.dataSource;
});
