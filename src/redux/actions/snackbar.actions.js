// Action types
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

// Action creators
export const showSnackbar = ({ payload }) => ({
	type: `${payload.feature} ${SHOW_SNACKBAR}`,
	payload,
});
export const hideSnackbar = (feature, message) => ({
	type: `${feature} ${HIDE_SNACKBAR}`,
	payload: { message },
});
