import { createSelector } from 'reselect';

//Selectores

const userPin = state => state.entities.auth.forgotPassword;

// Reselect

const getForgotPassword = createSelector([userPin], token => token);
export default getForgotPassword;
