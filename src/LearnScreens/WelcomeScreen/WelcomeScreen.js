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

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#039893',
    width: 230,
    marginTop: 30,
    borderRadius: 25
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain'
  },
  logoTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
  }
});

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
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          source={require('img/images/logo.png')}
        />
        <Text style={styles.logoTitle}>
          {'Welcome to RNN v2 Starter Kit!'}
        </Text>
      </View>
    )
  }
}

export default WelcomeScreen;
