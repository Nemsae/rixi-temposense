/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInputs = () => createSelector(
  selectHome,
  (homeState) => homeState.get('inputs').toJS()
);

const makeSelectMessage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('message')
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

export {
  selectHome,
  makeSelectInputs,
  makeSelectMessage,
  makeSelectLoading,
};
