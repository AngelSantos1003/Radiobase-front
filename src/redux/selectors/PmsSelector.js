import { createSelector } from 'reselect';

//Selectores
const payload = state => state.entities.Pms.dataPms;

//Reselect
const Pms1 = createSelector([payload], payload => payload);

export default Pms1;
