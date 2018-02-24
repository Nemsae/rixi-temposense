import { fromJS } from 'immutable';

import messages from './messages';

import {
  CHANGE_INPUT,
  CHANGE_MESSAGE,
  CHANGE_LOADING,
} from './constants';

const initialState = fromJS({
  inputs: {
    time: '',
    date: '',
    latitude: '',
    longitude: '',
  },
  loading: false,
  message: messages.errorMessage,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state
        .setIn(['inputs', action.id], action.value);
    // case CHANGE_INPUT:
    //   return state
    //     .setIn(['inputs', action.id], action.value);
    case CHANGE_MESSAGE:
      return state
        .set('message', action.message);
    case CHANGE_LOADING:
      return state
        .set('loading', !state.loading);
    default:
      return state;
  }
}

export default homeReducer;
