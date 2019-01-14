// @flow

import {
  RECIEVE_AUTHENTICATED_USER,
  SIGN_IN_WITH_PHONE_SUCCESS,
  SIGN_IN_WITH_PHONE_UPDATE,
  SIGN_IN_WITH_PHONE_RESET,
  SIGN_IN_WITH_PHONE_CODE_UPDATE,
  SIGN_IN_WITH_PHONE_CODE_SUCCESS,
  SIGN_OUT,
} from './actions';


const freshPhoneForm = {
  confirmResultAction: null,
  number: '',
  verificationCode: null,
  showVerificationCodeForm: false
}

export const DEFAULT = {
  phoneSignInForm: freshPhoneForm,
};

export default function audios(state = DEFAULT, action = {}) {
const { type, payload } = action;

  switch (type) {
    case SIGN_IN_WITH_PHONE_SUCCESS: {
      const { phoneSignInForm } = state
      return {
        ...state,
        phoneSignInForm: Object.assign({}, phoneSignInForm, {
          confirmResultAction: action.payload,
          showVerificationCodeForm: true,
        })
      }
    }
    case SIGN_IN_WITH_PHONE_UPDATE: {
      const { phoneSignInForm } = state
      return {
        ...state,
        phoneSignInForm: Object.assign({}, phoneSignInForm, {number: action.payload})
      }
    }
    case SIGN_IN_WITH_PHONE_RESET: {
      const { phoneSignInForm } = state
      return {
        ...state,
        phoneSignInForm: Object.assign({}, phoneSignInForm, freshPhoneForm)
      }
    }
    case SIGN_IN_WITH_PHONE_CODE_SUCCESS:{
      const { phoneSignInForm } = state
      const { payload } = action
      return {
        ...state,
        user: payload,
        phoneSignInForm: Object.assign({}, phoneSignInForm, freshPhoneForm)
      }
    }
    case SIGN_IN_WITH_PHONE_CODE_UPDATE:{
      const { phoneSignInForm } = state
      return {
        ...state,
        phoneSignInForm: Object.assign({}, phoneSignInForm, {
          verificationCode: action.payload,
        })
      }
    }
    case RECIEVE_AUTHENTICATED_USER: {
      const{ payload } = action
      return{
        ...state,
        user: payload
      }
    }
    case SIGN_OUT:{
      return {
        ...state,
        user: null,
      }
    }
    default:
      return state;
  }
}
