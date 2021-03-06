import { Navigation } from 'react-native-navigation';

import {
  LOGIN_SCREEN,
  PHONE_AUTH_SCREEN,
  WELCOME_SCREEN,
} from './Screens';

export function pushUnauthenticated() {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: LOGIN_SCREEN,
            }
          },
          {
            component: {
              name: PHONE_AUTH_SCREEN,
            }
          },
          {
            component: {
              name: WELCOME_SCREEN,
            }
          },
        ]
      }
    }
  });
}
