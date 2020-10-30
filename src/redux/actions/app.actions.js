/* Action types */
export const APP = '[APP]';
export const APP_INIT = `${APP} INIT`;
export const IS_READY = `${APP} IS_READY`;

// Url params
export const SET_PARAMS_URL_REQUEST = `${APP} SET_PARAMS_URL_REQUEST`;
// User
export const GET_USER_PROFILE = `${APP} GET_USER_PROFILE`;
export const SET_USER_PROFILE = `${APP} SET_USER_PROFILE`;

/* Action creators */
export const setHeaderRequest = headerRequest => ({
	type: SET_PARAMS_URL_REQUEST,
	payload: headerRequest,
});
export const setUserProfile = userProfile => ({
	type: SET_USER_PROFILE,
	payload: userProfile,
});
export const setAPPReady = ready => ({
	type: IS_READY,
	payload: ready,
});
