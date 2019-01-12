// @flow

import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  DashboardScreen,
  LoginScreen,
  PhoneAuthScreen,
  WelcomeScreen,
} from 'LearnScreens';
import { Provider } from 'AppRedux';

import {
  DASHBOARD_SCREEN,
  LOGIN_SCREEN,
  PHONE_AUTH_SCREEN,
  WELCOME_SCREEN,
} from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  Navigation.registerComponent(DASHBOARD_SCREEN, () => WrappedComponent(DashboardScreen));
  Navigation.registerComponent(PHONE_AUTH_SCREEN, () => WrappedComponent(PhoneAuthScreen));
}
