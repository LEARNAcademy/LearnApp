// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
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
import { connectData } from 'AppRedux';
import { apiConfig } from 'AppConfig';
import { pushAuthenticated } from 'LearnNavigation';
import { PHONE_AUTH_SCREEN } from '../../LearnNavigation/Screens'

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

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

  render() {
    return (
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
        <Button
          icon={{
            name: 'github-square',
            type: 'font-awesome',
            size: 50,
            color: 'white',
          }}
          title="Github Login"
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connectData()(LoginScreen);
