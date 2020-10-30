import axios from 'axios';
import auth from 'constants/auth';
import { apiRequest, apiSuccess, apiError } from 'actions/api.actions';
import { hideNotification } from 'actions/notification.actions';
import handleProgress from 'util/HandleProgress';
import handleNotification from 'util/HandleNotification';
import handleSnackbar from 'util/HandleSnackbar';
import handleResetEntity from 'util/HandleResetEntity';

const handleCancel = (dispatch, feature) => {
	dispatch(hideNotification(feature));
};

const handleCancelSession = (dispatch, feature) => {
	dispatch(hideNotification(feature));
	auth.signout(() => {
		handleResetEntity(dispatch, 'auth', 'userProfile', {});
		window.location = '/';
	});
};

const fetchApi = ({
	ip,
	// port,
	data,
	method = 'POST',
	params,
	feature,
	endpoint,
	message,
	token,
	notification = true,
} = {}) => async dispatch => {
	// const url = `http://${ip || process.env.URL}:${port || process.env.PORT}${endpoint}`;
	const url = `https://${ip || process.env.URL}${endpoint}`;
	const headers = token
		? {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  };
	if (notification) {
		handleProgress(dispatch, {
			show: true,
			feature,
			message,
		});
	}
	dispatch(apiRequest(feature));
	try {
		let instance = await axios.request({
			url,
			method,
			data,
			params,
			headers,
		});
		const response = await instance.data;
		let payload = await response.payload;
		dispatch(apiSuccess(feature));
		if (response.headerResponse.code === 403) {
			handleCancelSession(dispatch, feature);
		}
		if (notification) {
			if (response.headerResponse.code === 403) {
				handleNotification(dispatch, {
					content: 'Tu sesiòn a expirado o has iniciado sesiòn en otro dispositivo',
					okButtonTitle: 'Cerrar',
					onOk: () => handleCancelSession(dispatch, feature),
					feature,
					autoFocus: true,
				});
			}
			if (response.headerResponse.code === 204) {
				handleNotification(dispatch, {
					content: response.headerResponse.message,
					okButtonTitle: 'Cerrar',
					onOk: () => handleCancel(dispatch, feature),
					feature,
					autoFocus: true,
				});
			}
			if (response.headerResponse.code === 409) {
				handleNotification(dispatch, {
					type: 'error',
					content: response.headerResponse.message,
					children: response.headerResponse.uid && `UID: ${response.headerResponse.uid}`,
					okButtonTitle: 'Cerrar',
					onOk: () => handleCancel(dispatch, feature),
					feature,
					autoFocus: true,
				});
			}
			if (response.headerResponse.code === 200) {
				handleSnackbar(dispatch, {
					message: '¡Operación ejecutada correctamente!',
					feature,
				});
			}

			handleProgress(dispatch, {
				show: false,
				feature,
			});
		}
		if (!notification) {
			payload = {
				...response.payload,
				...response.headerResponse,
				...response.headerResponses,
			};
		}
		return await payload;
	} catch (error) {
		dispatch(apiError(feature));
		if (notification) {
			handleProgress(dispatch, {
				show: false,
				feature,
			});
		}
		handleNotification(dispatch, {
			type: 'error',
			content: 'Ocurrió un error, intenta nuevamente.',
			feature,
			onOk: () => handleCancel(dispatch, feature),
			okButtonTitle: 'Cerrar',
			autoFocus: true,
		});

		throw new Error(error);
	}
};

export default fetchApi;
