import { createSelector } from 'reselect';

//Selectores

const userProfile = state => state.entities.auth.userProfile;

// Reselect

const getTokenLogin = createSelector([userProfile], token => token);

export default getTokenLogin;
