import fetchApi from 'api/fetchApi';
import { hideNotification } from 'actions/notification.actions';
import { REPORTS, setReports } from 'actions/reports.actions';
import handleProgress from 'util/HandleProgress';
import handleSnackbar from 'util/HandleSnackbar';
import handleNotification from 'util/HandleNotification';
import { isEmptyObject } from 'util/Validators';

const handleCancel = (dispatch, feature) => {
	dispatch(hideNotification(feature));
};
const handleFinalizar = (dispatch, feature, message) => {
	handleSnackbar(dispatch, {
		message,
		feature,
	});
};
const sendReportsApi = async (dispatch, query) => {
	handleProgress(dispatch, {
		show: true,
		feature: REPORTS,
	});
	try {
		const response = await dispatch(fetchApi(query));
		if (response.code === 200) {
			handleProgress(dispatch, {
				show: false,
				feature: REPORTS,
			});
			if (isEmptyObject(response)) {
				await dispatch(
					setReports({
						payload: response,
						feature: REPORTS,
					})
				);
			}
			handleFinalizar(dispatch, REPORTS, 'RadioBase actualizada');
		}
		if (response.code !== 200) {
			const type = response.code === 409 && 'error';
			handleProgress(dispatch, {
				show: false,
				feature: REPORTS,
			});
			handleNotification(dispatch, {
				type,
				content: response.message,
				children: response.uid && `UID: ${response.uid}`,
				okButtonTitle: 'Cerrar',
				onOk: () => handleCancel(dispatch, REPORTS),
				feature: REPORTS,
				autoFocus: true,
			});
		}
	} catch (error) {
		handleNotification(dispatch, {
			type: 'error',
			content: 'Hubo un error al iniciar session',
			children: 'Error de servidor.',
			okButtonTitle: 'Cerrar',
			onOk: () => handleCancel(dispatch, REPORTS),
			feature: REPORTS,
			autoFocus: true,
		});
		handleProgress(dispatch, {
			show: false,
			feature: REPORTS,
		});
		throw new Error(error);
	}
};

export default sendReportsApi;
