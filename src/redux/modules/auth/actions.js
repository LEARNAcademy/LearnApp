// @flow

import { createAction } from 'redux-actions';

export const RECIEVE_OAUTH_TOKEN = 'auth/RECIEVE_OAUTH_TOKEN'
export const RECIEVE_AUTHENTICATED_USER = 'auth/RECIEVE_AUTHENTICATED_USER'
export const SIGN_IN_WITH_PHONE_CODE_FAIL = 'auth/SIGN_IN_WITH_PHONE_CODE_FAIL'
export const SIGN_IN_WITH_PHONE_CODE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_CODE_SUBMIT'
export const SIGN_IN_WITH_PHONE_CODE_SUCCESS = 'auth/SIGN_IN_WITH_PHONE_CODE_SUCCESS'
export const SIGN_IN_WITH_PHONE_CODE_UPDATE = 'auth/SIGN_IN_WITH_PHONE_CODE_UPDATE'
export const SIGN_IN_WITH_PHONE_FAIL = 'auth/SIGN_IN_WITH_PHONE_FAIL'
export const SIGN_IN_WITH_PHONE_RESET = 'auth/SIGN_IN_WITH_PHONE_RESET'
export const SIGN_IN_WITH_PHONE_SUBMIT = 'auth/SIGN_IN_WITH_PHONE_SUBMIT'
export const SIGN_IN_WITH_PHONE_SUCCESS = 'auth/SIGN_IN_WITH_PHONE_SUCCESS'
export const SIGN_IN_WITH_PHONE_UPDATE = 'auth/SIGN_IN_WITH_PHONE_UPDATE'
export const SIGN_OUT = 'auth/SIGN_OUT'

export const fetchAuthActionCreators = {
  recieveAccessToken: createAction(RECIEVE_OAUTH_TOKEN),
  recieveAuthenticatedUser: createAction(RECIEVE_AUTHENTICATED_USER),
  signInWithPhoneCodeFail: createAction(SIGN_IN_WITH_PHONE_CODE_FAIL),
  signInWithPhoneCodeSubmit: createAction(SIGN_IN_WITH_PHONE_CODE_SUBMIT),
  signInWithPhoneCodeSuccess: createAction(SIGN_IN_WITH_PHONE_CODE_SUCCESS),
  signInWithPhoneCodeUpdate: createAction(SIGN_IN_WITH_PHONE_CODE_UPDATE),
  signInWithPhoneFail: createAction(SIGN_IN_WITH_PHONE_FAIL),
  signInWithPhoneReset: createAction(SIGN_IN_WITH_PHONE_RESET),
  signInWithPhoneSubmit: createAction(SIGN_IN_WITH_PHONE_SUBMIT),
  signInWithPhoneSuccess: createAction(SIGN_IN_WITH_PHONE_SUCCESS),
  signInWithPhoneUpdate: createAction(SIGN_IN_WITH_PHONE_UPDATE),
  signOut: createAction(SIGN_OUT),
}
