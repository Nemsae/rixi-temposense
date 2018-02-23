import {
  CHANGE_INPUT,
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
