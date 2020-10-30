import { createSelector } from 'reselect';
import store from '../store/index';

// Selectors
export const getSnackBarSelector = () => store.snackbar;
const getSnackBar = state => state.snackbar;

// Reselect functions
export const getSnackBarState = createSelector([getSnackBar], snackbar => snackbar);
