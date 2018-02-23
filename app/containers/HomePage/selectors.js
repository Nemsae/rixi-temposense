/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInputs = () => createSelector(
  selectHome,
  (homeState) => homeState.get('inputs').toJS()
);

export {
  selectHome,
  makeSelectInputs,
};
