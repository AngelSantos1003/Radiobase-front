import { SET_ACTION } from 'actions/getter.actions';

export const EMPLEADOS = 'EMPLEADOS';
export const EMPLOY = `[${EMPLEADOS} Obtenida]`;

export const sendEmpleados = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Empleados',
		module: 'empleado',
	},
});

export const sendAllEmpleados = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Empleados',
		module: 'allEmploye',
	},
});
