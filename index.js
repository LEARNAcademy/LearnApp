import { Navigation } from 'react-native-navigation'
import { pushUnauthenticated } from 'LearnNavigation'

Navigation.events().registerAppLaunchedListener(() => pushUnauthenticated())
