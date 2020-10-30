import { createSelector } from 'reselect';
import store from '../store/index';

// Selectors
export const getAppSelector = () => store.app;
let getHeaderRequest = state => state.app.headerRequest;
let getUserProfile = state => state.app.userProfile;

// Reselect functions
export const getHeaderRequestState = createSelector(
	[getHeaderRequest],
	headerRequest => headerRequest
);
export const getUserProfileState = createSelector([getUserProfile], userProfile => userProfile);
