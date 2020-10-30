import { createSelector } from 'reselect';
import store from '../store/index';

// Selectors
export const getEntitySelector = () => store.entities;
let getEntity = state => state.entities;

// Reselect functions
export const getEntityState = createSelector([getEntity], entities => entities);
