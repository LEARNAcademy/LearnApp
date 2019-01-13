// @flow

import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  auth,
  data,
} from '../modules';

const config = {
  key: 'LIFTED_REDUX_STORE',
  storage
};

const appReducer = persistCombineReducers(config, {
  auth,
  data,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
