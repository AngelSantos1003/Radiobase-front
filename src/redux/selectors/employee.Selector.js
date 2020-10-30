import { createSelector } from 'reselect';

//Selectores

const allEmployee = state => state.entities.Empleados;

// Reselect

const getEmployees = createSelector([allEmployee], employee => employee.allEmploye);

export default getEmployees;
