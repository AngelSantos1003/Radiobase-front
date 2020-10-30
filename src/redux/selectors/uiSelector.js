import { createSelector } from 'reselect';
import store from '../store/index';

// Selectors
export const getUiSelector = () => store.ui;
const getRequestProgress = state => state.ui.requestProgress;

// Reselect functions
export const getUiState = createSelector([getUiSelector], ui => ui);
export const getRequestProgressState = createSelector(
	[getRequestProgress],
	requestProgress => requestProgress
);
