// @flow

import { App_Service } from 'AppServices';

import {
  all,
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects';

import firebase from 'react-native-firebase'

import {
  RECIEVE_OAUTH_TOKEN,
  SIGN_IN_WITH_PHONE_SUBMIT,
  SIGN_IN_WITH_PHONE_CODE_SUBMIT,
  SIGN_IN_WITH_PHONE_SUCCESS,
  SIGN_OUT,
  fetchAuthActionCreators,
} from './actions';


export function* asyncSignInWithPhone({ payload }) {
  const{ signInWithPhoneSuccess } = fetchAuthActionCreators
  const confirmResult = yield call(() => firebase.auth().signInWithPhoneNumber(`+1 ${payload}`))
  console.log("CONFIRMRESULT", confirmResult.confirm)
  yield put(signInWithPhoneSuccess(confirmResult));
}

export function* watchSignInWithPhoneSubmit() {
  while (true) {
    const action = yield take(SIGN_IN_WITH_PHONE_SUBMIT);
    yield* asyncSignInWithPhone(action);
  }
}


export function* asyncPhoneVerificationCode({ payload }) {
  const{ signInWithPhoneCodeSuccess } = fetchAuthActionCreators
  const { confirmResultAction, verificationCode } = payload
  const user = yield call(() => confirmResultAction.confirm(verificationCode))
  yield put(signInWithPhoneCodeSuccess(user))
}

export function* watchPhoneVerificationCodeSubmit() {
  while (true) {
    const action = yield take(SIGN_IN_WITH_PHONE_CODE_SUBMIT);
    yield* asyncPhoneVerificationCode(action);
  }
}

export function* asyncExchangeOauthToken({ payload }){
  const{ recieveAuthenticatedUser } = fetchAuthActionCreators
  const credential = firebase.auth.GithubAuthProvider.credential(payload);
  const response = yield firebase.auth().signInWithCredential(credential)
  yield put(recieveAuthenticatedUser(response.user))
}

export function* watchRecieveOauthToken(){
  while(true){
    const action = yield take(RECIEVE_OAUTH_TOKEN)
    yield* asyncExchangeOauthToken(action)
  }
}

export function* asyncSignOut(){
  yield firebase.auth().signOut();
}

export function* watchSignOut(){
  while(true){
    const action = yield take(SIGN_OUT);
    yield* asyncSignOut()
  }
}

export default function* () {
  yield all([
    fork(watchSignInWithPhoneSubmit),
    fork(watchPhoneVerificationCodeSubmit),
    fork(watchRecieveOauthToken),
    fork(watchSignOut),
  ]);
}
