// @flow

import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements'
import firebase from 'react-native-firebase'
import { pushAuthenticated } from 'LearnNavigation'
import Theme from '../../styles/Theme'

class WelcomeScreen extends PureComponent {
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.resolveUserState(user)
    });
  }

  /*
   * Stop Listening or auth state changes
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  resolveUserState = (user) => {
    console.log("USER", user)
    if(user){
      pushAuthenticated()
    }else{
      Navigation.push(this.props.componentId, {
        component: {
          name: 'Learn.Login',
          passProps: {
          },
          options: {
            topBar: {
              title: {
                text: 'Pushed screen title'
              }
            }
          }
        }
      })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('img/student-outline-super-highlight.png')}
          style={styles.image}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Theme.Colors.darkBackground,
  },
  image: {
    width: '100%'
  }
});
export default WelcomeScreen;
