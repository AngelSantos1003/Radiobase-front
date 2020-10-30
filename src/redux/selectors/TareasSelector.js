import { createSelector } from 'reselect';

//Selectores
const payload = state => state.entities.Tareas.dataTareas;

//Reselect
const Tareas1 = createSelector([payload], payload => payload);

export default Tareas1;
