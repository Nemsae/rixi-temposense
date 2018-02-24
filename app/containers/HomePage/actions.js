import {
  CHANGE_INPUT,
  CHANGE_MESSAGE,
  CHANGE_LOADING,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {id} id The id of the input field
 * @param  {value} value The value of the input field
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
 * @param  {id} id The id of the input field
 * @param  {value} value The value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TIME
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
 * @param  {id} id The id of the input field
 * @param  {value} value The value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TIME
 */
export function changeLoading() {
  return {
    type: CHANGE_LOADING,
  };
}
