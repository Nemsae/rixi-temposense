import { fromJS } from 'immutable';

import messages from './messages';

import {
  CHANGE_INPUT,
  CHANGE_MESSAGE,
  CHANGE_LOADING,
  CREATE_SENSOR,
  CREATE_SENSOR_SUCCESS,
  CREATE_SENSOR_ERROR,
} from './constants';

const initialState = fromJS({
  inputs: {
    time: '',
    date: '',
    latitude: '',
    longitude: '',
  },
  loading: false,
  success: false,
  error: false,
  data: null,
  message: messages.errorMessage,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state
        .setIn(['inputs', action.id], action.value);
    case CHANGE_MESSAGE:
      return state
        .set('message', action.message);
    case CHANGE_LOADING:
      return state
        .set('loading', !state.loading);
    case CREATE_SENSOR:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false)
        .set('data', null);
    case CREATE_SENSOR_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('data', action.data);
    case CREATE_SENSOR_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true)
        .set('data', action.data);
    default:
      return state;
  }
}

export default homeReducer;
