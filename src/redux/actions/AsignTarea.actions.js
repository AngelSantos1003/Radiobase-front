import { SET_ACTION } from 'actions/getter.actions';

export const ASIGTAREA = 'ASIGTAREA';
export const TAREAS = 'TAREAS';
export const PMS = 'PMS';
export const PROYECTOS = 'PROYECTOS';
export const AREAS = 'AREAS';

// Action creators

export const GETEMPLOYEES = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Empleados',
		module: 'empleado',
	},
});

// Action creators TAREAS

export const GET_TAREAS = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Tareas',
		module: 'dataTareas',
	},
});

// Action creators PMS

export const GET_PMS = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Pms',
		module: 'dataPms',
	},
});

// Action creators PROYECTOS

export const GET_PROYECTOS = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Proyectos',
		module: 'dataProyectos',
	},
});

// Action creators AREAS

export const GET_AREASS = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Areas',
		module: 'dataAreas',
	},
});

// Action creators send asignar tareas

export const GET_ASIGNAR_TAREAS = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Asignartarea',
		module: 'sendAsignarTarea',
	},
});
