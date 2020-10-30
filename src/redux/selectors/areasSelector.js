import { createSelector } from 'reselect';

//Selectores

const dataArea = state => state.entities.Areas.dataAreas;

// Reselect
const getDataArea = createSelector(dataArea, data => data);

export default getDataArea;
