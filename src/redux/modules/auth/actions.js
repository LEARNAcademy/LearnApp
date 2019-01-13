// @flow

import { createAction } from 'redux-actions';

export const SIGN_IN_WITH_PHONE_CODE_FAIL = 'auth/SIGN_IN_WITH_PHONE_CODE_FAIL'
export const SIGN_IN_WITH_PHONE_CODE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_CODE_SUBMIT'
export const SIGN_IN_WITH_PHONE_CODE_SUCCESS = 'auth/SIGN_IN_WITH_PHONE_CODE_SUCCESS'
export const SIGN_IN_WITH_PHONE_CODE_UPDATE = 'auth/SIGN_IN_WITH_PHONE_CODE_UPDATE'
export const SIGN_IN_WITH_PHONE_FAIL = 'auth/SIGN_IN_WITH_PHONE_FAIL'
export const SIGN_IN_WITH_PHONE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_SUBMIT'
export const SIGN_IN_WITH_PHONE_SUCCESS = 'auth/SIGN_IN_WITH_PHONE_SUCCESS'
export const SIGN_IN_WITH_PHONE_UPDATE = 'auth/SIGN_IN_WITH_PHONE_UPDATE'
export const SIGN_IN_WITH_PHONE_RESET = 'auth/SIGN_IN_WITH_PHONE_RESET'

export const fetchAuthActionCreators = {
  signInWithPhoneCodeFail: createAction(SIGN_IN_WITH_PHONE_CODE_FAIL),
  signInWithPhoneCodeSubmit: createAction(SIGN_IN_WITH_PHONE_CODE_SUBMIT),
  signInWithPhoneCodeSuccess: createAction(SIGN_IN_WITH_PHONE_CODE_SUCCESS),
  signInWithPhoneCodeUpdate: createAction(SIGN_IN_WITH_PHONE_CODE_UPDATE),
  signInWithPhoneFail: createAction(SIGN_IN_WITH_PHONE_FAIL),
  signInWithPhoneSubmit: createAction(SIGN_IN_WITH_PHONE_SUBMIT),
  signInWithPhoneSuccess: createAction(SIGN_IN_WITH_PHONE_SUCCESS),
  signInWithPhoneUpdate: createAction(SIGN_IN_WITH_PHONE_UPDATE),
  signInWithPhoneReset: createAction(SIGN_IN_WITH_PHONE_RESET),
}
