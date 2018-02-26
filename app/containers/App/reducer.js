import { fromJS } from 'immutable';

import {
  CREATE_SENSOR_SUCCESS,
  DELETE_SENSOR_SUCCESS,
} from 'containers/HomePage/constants';

import {
  LOAD_SENSORS_SUCCESS,
  LOAD_SENSORS,
  LOAD_SENSORS_ERROR,
  INCREMENT_HALF_LIFE,
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
    case CREATE_SENSOR_SUCCESS: {
      const currentState = state.toJS();
      let updatedSensors;
      if (currentState.appData.sensors === false) {
        updatedSensors = [action.data];
      } else {
        updatedSensors = [...currentState.appData.sensors, action.data];
      }
      return state
      .setIn(['appData', 'sensors'], updatedSensors);
    }
    case DELETE_SENSOR_SUCCESS: {
      const currentState = state.toJS();
      const updatedSensors = currentState.appData.sensors.reduce((accum, sensor) => {
        if (sensor._id !== action.id) {
          return accum.concat(sensor);
        }
        return accum;
      }, []);
      return state
        .setIn(['appData', 'sensors'], updatedSensors);
    }
    case INCREMENT_HALF_LIFE: {
      const agedSensors = state.getIn(['appData', 'sensors']) && state.getIn(['appData', 'sensors']).map((sensor) => ({ ...sensor, half_life: sensor.half_life + 1 }));
      return state
        .setIn(['appData', 'sensors'], agedSensors);
    }
    default:
      return state;
  }
}

export default appReducer;
