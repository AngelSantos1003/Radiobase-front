import ReportIcon from '@material-ui/icons/Assignment';
import Reports from 'containers/Reports/Reports';

const dashboardRoutes = [
	{
		path: '/Reportes',
		name: 'Reportes',
		icon: ReportIcon,
		component: Reports,
		layout: '/home',
	},
];

export default dashboardRoutes;
