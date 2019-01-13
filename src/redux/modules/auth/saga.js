// @flow

import { App_Service } from 'AppServices';

import {
  all,
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects';

import {
  SIGN_IN_WITH_PHONE_SUBMIT,
  SIGN_IN_WITH_PHONE_CODE_SUBMIT,
  fetchAuthActionCreators
} from './actions';

export function* asyncSignInWithPhone({ payload }) {

}

export function* watchSignInWithPhoneSubmit() {
  while (true) {
    const action = yield take(SIGN_IN_WITH_PHONE_SUBMIT);
    yield* asyncSignInWithPhone(action);
  }
}


export function* asyncPhoneVerificationCode({ payload }) {

}

export function* watchPhoneVerificationCodeSubmit() {
  while (true) {
    const action = yield take(SIGN_IN_WITH_PHONE_CODE_SUBMIT);
    yield* asyncSignInWithPhone(action);
  }
}

export default function* () {
  yield all([
    fork(watchSignInWithPhoneSubmit),
    fork(watchPhoneVerificationCodeSubmit),
  ]);
}
