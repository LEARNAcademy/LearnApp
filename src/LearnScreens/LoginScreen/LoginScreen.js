// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import {
  Button,
  Icon,
} from 'react-native-elements'

import { connectAuth, connectData } from 'AppRedux';
import { apiConfig } from 'AppConfig';
import { pushAuthenticated } from 'LearnNavigation';
import { PHONE_AUTH_SCREEN } from '../../LearnNavigation/Screens'
import GithubOauth from '../../components/GithubOauth'

import firebase from 'react-native-firebase'

import Theme from '../../styles/Theme'


class LoginScreen extends PureComponent {

  componentDidMount() {
    const { fetchData } = this.props;

    // call redux action
    fetchData({ url: apiConfig.api_endpoint, method: 'GET', params: null });
  }

  launchSmsLogin = () => {
    const { navigator } = this.props
    Navigation.push(this.props.componentId, {
      component: {
        name: PHONE_AUTH_SCREEN,
      },
    })

  }

  onRecieveToken = async (accessToken) => {
    const{ recieveAccessToken } = this.props
    recieveAccessToken(accessToken)
  }


  render() {
    return (
      <View
        style={styles.container}
      >
      <ImageBackground
        source={require('img/student-outline-super-highlight.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.flex}>
          <Button
            onPress={this.launchSmsLogin}
            icon={{
              name: "comment",
              type: 'font-awesome',
              size: 50,
              color: 'white',
            }}
            title="SMS Login"
          />
          <GithubOauth
            onRecieveToken={this.onRecieveToken}
          />
        </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container:{
    height: '100%',
    backgroundColor: Theme.Colors.darkBackground,
  },
  backgroundImage:{
    width: '100%',
    height: '100%',
  }
});
LoginScreen.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connectData()(connectAuth()(LoginScreen));
