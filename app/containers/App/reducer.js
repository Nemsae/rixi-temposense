import { fromJS } from 'immutable';

import {
  LOAD_SENSORS_SUCCESS,
  LOAD_SENSORS,
  LOAD_SENSORS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  appData: {
    sensors: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SENSORS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['appData', 'sensors'], false);
    case LOAD_SENSORS_SUCCESS:
      return state
        .setIn(['appData', 'sensors'], action.sensors)
        .set('loading', false);
    case LOAD_SENSORS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
