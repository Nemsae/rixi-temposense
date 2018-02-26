
import {
  LOAD_SENSORS,
  LOAD_SENSORS_SUCCESS,
  LOAD_SENSORS_ERROR,
  INCREMENT_HALF_LIFE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SENSORS
 */
export function loadSensors() {
  return {
    type: LOAD_SENSORS,
  };
}

/**
 * action that increments count of all ongoing simulations
 *
 * @return {object} An action object with a type of INCREMENT_HALF_LIFE
 */
export function ageSimulation() {
  return {
    type: INCREMENT_HALF_LIFE,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} sensors The repository data
 *
 * @return {object}      An action object with a type of LOAD_SENSORS_SUCCESS passing the sensors
 */
export function sensorsLoaded(sensors) {
  return {
    type: LOAD_SENSORS_SUCCESS,
    sensors,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SENSORS_ERROR passing the error
 */
export function sensorsLoadingError(error) {
  return {
    type: LOAD_SENSORS_ERROR,
    error,
  };
}
