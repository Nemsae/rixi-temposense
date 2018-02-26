import {
  CHANGE_INPUT,
  CHANGE_MESSAGE,
  CHANGE_LOADING,
  CREATE_SENSOR,
  CREATE_SENSOR_SUCCESS,
  CREATE_SENSOR_ERROR,
  DELETE_SENSOR,
  DELETE_SENSOR_SUCCESS,
  DELETE_SENSOR_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} id The id of the input field
 * @param  {string} value The value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TIME
 */
export function changeInput(id, value) {
  return {
    type: CHANGE_INPUT,
    id,
    value,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {object} message The message obj, containing id and defaultMessage prop
 *
 * @return {object}    An action object with a type of CHANGE_MESSAGE
 */
export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE,
    message,
  };
}

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_LOADING
 */
export function changeLoading() {
  return {
    type: CHANGE_LOADING,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {object} package The request package with data
 *
 * @return {object}    An action object with a type of CHANGE_TIME
 */
export function createSensor() {
  return {
    type: CREATE_SENSOR,
  };
}

/**
 * Dispatched when sensor is succesfully added
 *
 * @param  {array} sensors The sensors data
 *
 * @return {object}      An action object with a type of LOAD_SENSORS_SUCCESS passing the sensors
 */
export function sensorCreated(data) {
  return {
    type: CREATE_SENSOR_SUCCESS,
    data,
  };
}

/**
 * Dispatched when adding fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SENSORS_ERROR passing the error
 */
export function sensorCreatingError(error) {
  return {
    type: CREATE_SENSOR_ERROR,
    data: error,
  };
}

/**
 * Delete sensor
 *
 * @param  {string} id id of current sensor
 *
 * @return {object}    An action object with a type of DELETE_SENSOR
 */
export function deleteSensor(id) {
  return {
    type: DELETE_SENSOR,
    id,
  };
}

/**
 * Dispatched when sensor is succesfully deleted
 *
 * @param  {array} sensors The repository data
 *
 * @return {object}      An action object with a type of DELETE_SENSOR_SUCCESS passing the sensors
 */
export function sensorDeleted(id) {
  return {
    type: DELETE_SENSOR_SUCCESS,
    id,
  };
}

/**
 * Dispatched when deleting fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SENSORS_ERROR passing the error
 */
export function sensorDeletingError(error) {
  return {
    type: DELETE_SENSOR_ERROR,
    data: error,
  };
}
