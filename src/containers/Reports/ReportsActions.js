import { REPORTS } from 'actions/reports.actions';
import GET_DATA_REPORT from 'constants/Endpoints';
import sendReportsApi from './ReportsApi';

const sendReportsAction = (dispatch, data) => {
	const {
		nPagination = 1000,
		nRecords = 1000,
		dateInitial = '2019-08-23',
		region = 6,
		dateEnd = '2019-08-25',
	} = data;
	const params = {
		nPagination,
		nRecords,
		dateInitial,
		region,
		dateEnd,
	};

	const query = {
		ip: 'radiobase-api.herokuapp.com',
		method: 'GET',
		params,
		feature: REPORTS,
		endpoint: GET_DATA_REPORT,
		notification: false,
	};
	sendReportsApi(dispatch, query);
};

export default sendReportsAction;
