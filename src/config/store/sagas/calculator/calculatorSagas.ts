import { all, takeLatest } from 'redux-saga/effects';
import { handleAddNewValue } from 'screens/calculator/calculator/redux/sagas';
import { REQUEST_ADD_NEW_VALUE } from 'screens/calculator/calculator/redux/types';

export default function* calculatorSagas() {
    yield takeLatest(REQUEST_ADD_NEW_VALUE, handleAddNewValue)
}