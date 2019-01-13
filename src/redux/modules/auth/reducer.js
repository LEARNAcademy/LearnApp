// @flow

import {
  SIGN_IN_WITH_PHONE_SUCCESS,
  SIGN_IN_WITH_PHONE_UPDATE,
} from './actions';

export const DEFAULT = {
  phoneSignInForm: {
    number: '',
  }
};

export default function audios(state = DEFAULT, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_WITH_PHONE_SUCCESS: {
      return payload;
    }
    case SIGN_IN_WITH_PHONE_UPDATE: {
      const { phoneSignInForm } = state
      return {
        ...state,
        phoneSignInForm: Object.assign({}, phoneSignInForm, {number: action.payload})
      }
    }
    default:
      return state;
  }
}
