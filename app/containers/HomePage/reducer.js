import { fromJS } from 'immutable';

import {
  CHANGE_INPUT,
} from './constants';

const initialState = fromJS({
  inputs: {
    time: '',
    date: '',
    latitude: '',
    longitude: '',
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state
        .setIn(['inputs', action.id], action.value);
    default:
      return state;
  }
}

export default homeReducer;
