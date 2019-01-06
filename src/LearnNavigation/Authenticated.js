// @flow

import { Navigation } from 'react-native-navigation';

import {
  DASHBOARD_SCREEN
} from './Screens';

export function pushAuthenticated() {
  Navigation.setRoot({
    topBar: {
      background: {
        color: 'black'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    root: {
      stack: {
        children: [
          {
            component: {
              name: DASHBOARD_SCREEN
            }
          },
        ]
      }
    }
  });
}
