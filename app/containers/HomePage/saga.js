/**
 * Sagas for:
 *  1. Get all sensors
 *  2. Add a new sensor
 *
 */

import { call, take, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_SENSORS } from 'containers/App/constants';
import { CREATE_SENSOR, DELETE_SENSOR } from 'containers/HomePage/constants';
import { sensorsLoaded, sensorsLoadingError } from 'containers/App/actions';
import { sensorCreated, sensorCreatingError, sensorDeleted, sensorDeletingError } from 'containers/HomePage/actions';

import request from 'utils/request';
import { makeSelectInputs } from 'containers/HomePage/selectors';

/**
 * POST add new sensor with Dark Sky API
 */
export function* addSensor() {
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
    // console.log('response:addSensor::HomePage/saga.js ', response);
    yield put(sensorCreated(response.data));
  } catch (err) {
    yield put(sensorCreatingError(err));
  }
}

/**
 * POST delete sensor with id
 */
export function* deleteSensor(action) {
  // const requestURL = `/api/sensors/delete?id=${action.id}`;
  const requestURL = `/api/sensors/${action.id}`;

  try {
    const response = yield call(request, requestURL, {
      method: 'DELETE',
    });
    yield put(sensorDeleted(action.id));
  } catch (err) {
    yield put(sensorDeletingError(err));
  }
}

/**
 * Dark Sky API request/response handler
 */
export function* loadSensors() {
  const requestURL = '/api/sensors/';
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    // console.log('response:loadSensors::HomePage/saga.js ', response);
    yield put(sensorsLoaded(response.data));
  } catch (err) {
    // console.log('err:loadSensors::HomePage/saga.js ', err);
    yield put(sensorsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sensorsData() {
  // Watches for CREATE_SENSOR actions and calls addSensor when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CREATE_SENSOR, addSensor);
  yield takeLatest(DELETE_SENSOR, deleteSensor);
  yield takeLatest(LOAD_SENSORS, loadSensors);
}
