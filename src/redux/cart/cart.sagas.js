import { takeLatest, put, call, all } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import { UserActionTypes } from '../user/user.types';

const { SIGN_OUT_SUCCESS } = UserActionTypes;

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* signOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([
    call(signOutSuccess)
  ])
}