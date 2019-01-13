// @flow

import { createAction } from 'redux-actions';

export const SIGN_IN_WITH_PHONE_FAIL = 'auth/SIGN_IN_WITH_PHONE_FAIL'
export const SIGN_IN_WITH_PHONE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_SUBMIT'
export const SIGN_IN_WITH_PHONE_CODE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_CODE_SUBMIT'
export const SIGN_IN_WITH_PHONE_UPDATE = 'auth/SIGN_IN_WITH_PHONE_UPDATE'

export const fetchAuthActionCreators = {
  signInWithPhoneFail: createAction(SIGN_IN_WITH_PHONE_FAIL),
  signInWithPhoneSubmit: createAction(SIGN_IN_WITH_PHONE_SUBMIT),
  signInWithPhoneSuccess: createAction(SIGN_IN_WITH_PHONE_CODE_SUBMIT),
  signInWithPhoneUpdate: createAction(SIGN_IN_WITH_PHONE_UPDATE),
}
