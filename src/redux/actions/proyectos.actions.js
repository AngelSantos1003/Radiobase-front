import { SET_ACTION } from 'actions/getter.actions';

export const PROYECTOS = 'PROYECTOS';
export const PROYECTS = `[${PROYECTOS} Obtenida]`;

export const sendProyectos = ({ payload, feature }) => ({
	type: `${feature} ${SET_ACTION}`,
	payload,
	entity: {
		epic: 'Proyectos',
		module: 'dataProyectos',
	},
});
