// Action types
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

// Action creators
export const showNotification = ({ payload }) => ({
	type: `${payload.feature} ${SHOW_NOTIFICATION}`,
	payload,
});
export const hideNotification = feature => ({
	type: `${feature} ${HIDE_NOTIFICATION}`,
	payload: {},
});
