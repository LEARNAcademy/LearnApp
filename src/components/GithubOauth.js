import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Button } from 'react-native-elements'
import { authorize } from 'react-native-app-auth';

import Theme from '../styles/Theme'

export default class GithubOauth extends Component {
  launchGithubLogin = async () => {
    const { onRecieveToken } = this.props
    const config = {
      issuer: 'https://github.com',
      serviceConfiguration:{
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        tokenEndpoint: 'https://github.com/login/oauth/access_token',

      },
      redirectUrl: 'org.learnacademy.mobile://callback',
      clientId: '96e4c5c864d665c2c90c',
      clientSecret: 'ad385e6b1ee551750465a2c71d3bffb143e7b737',
      scopes: ['user:read'],
    };

    const result = await authorize(config);
    const { accessToken } = result
    onRecieveToken(accessToken)
  }

  render() {
    return(
      <Button
        onPress={this.launchGithubLogin}
        icon={{
          name: 'github-square',
          type: 'font-awesome',
          size: 50,
          color: 'white',
        }}
        title="Github Login"
      />
    )
  }
}

const styles = StyleSheet.create({

})
