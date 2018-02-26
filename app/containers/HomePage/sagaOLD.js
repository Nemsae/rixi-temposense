/**
 * Gets the temperatures with inputs
 *
 * Dark Sky API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_SENSORS } from 'containers/App/constants';
import { sensorsLoaded, sensorsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectInputs } from 'containers/HomePage/selectors';

/**
 * Dark Sky API request/response handler
 */
export function* getSensors() {
  const inputs = yield select(makeSelectInputs());
  const requestURL = '/api/sensors/add';

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: JSON.stringify(inputs),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    console.log('response:HomePage/saga.js ', response);
    yield put(sensorsLoaded(response.data));
  } catch (err) {
    yield put(sensorsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sensorsData() {
  // Watches for LOAD_SENSORS actions and calls getSensors when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SENSORS, getSensors);
}
