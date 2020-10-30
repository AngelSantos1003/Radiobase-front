import update from 'immutability-helper';
import { SET_USER_PROFILE, IS_READY } from 'actions/app.actions';
import { getAppSelector } from 'selectors/appSelector';

const initAppState = getAppSelector();

export default (state = initAppState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return update(state, {
				userProfile: {
					$set: action.payload,
				},
			});
		case IS_READY:
			return update(state, {
				appReady: {
					$set: action.payload,
				},
			});
		default:
			return state;
	}
};
