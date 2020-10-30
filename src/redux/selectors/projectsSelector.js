import { createSelector } from 'reselect';

//Selectores

const dataProjects = state => state.entities.projects;

// Reselect

export const getProjects = createSelector([dataProjects], project => project.allProjects);
export const getReports = createSelector([dataProjects], project => project.reports);
