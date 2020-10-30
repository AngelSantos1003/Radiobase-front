import { createSelector } from 'reselect';

//Selectores

const dataEmpleados = state => state.entities.Empleados.empleado;

// Reselect
const getDataEmpleados = createSelector(dataEmpleados, data => data);

export default getDataEmpleados;
