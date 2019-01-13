import { Navigation } from 'react-native-navigation'
import {
  pushAuthenticated,
  pushUnauthenticated,
} from 'LearnNavigation'
import firebase from 'react-native-firebase'

Navigation.events().registerAppLaunchedListener(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      pushAuthenticated()
    }else{
      pushUnauthenticated()
    }
  });
})
