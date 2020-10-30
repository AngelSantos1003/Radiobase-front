import { createSelector } from 'reselect';

//Selectores
const getSessionReducer = state => state.sessionReducer;

// Reselect
const getSessionState = createSelector([getSessionReducer], session => session);

export default getSessionState;
