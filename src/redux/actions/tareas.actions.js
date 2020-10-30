import { SET_ACTION } from 'actions/getter.actions';

export const TAREA = 'TAREA';
export const TARE = `[${TAREA} TAREAS obtenidos]`;

export const getTarea = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Tareas',
		module: 'dataTareas',
	},
});
