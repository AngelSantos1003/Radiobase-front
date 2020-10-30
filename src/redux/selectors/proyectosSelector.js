import { createSelector } from 'reselect';

//Selectores

const dataProyectos = state => state.entities.Proyectos.dataProyectos;

// Reselect
const getDataProyectos = createSelector(dataProyectos, data => data);

export default getDataProyectos;
