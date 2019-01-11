// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Button,
  Icon,
} from 'react-native-elements'
import { connectData } from 'AppRedux';
import { apiConfig } from 'AppConfig';
import { pushAuthenticated } from 'LearnNavigation';

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

  onLoginOrRegister = () => {
  const { phoneNumber } = this.state;
  firebase.auth().signInWithPhoneNumber(phoneNumber)
    .then((confirmResult) => {
      // This means that the SMS has been sent to the user
      // You need to:
      //   1) Save the `confirmResult` object to use later
      this.setState({ confirmResult });
      //   2) Hide the phone number form
      //   3) Show the verification code form
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
  }
  onVerificationCode = () => {
    const { confirmResult, verificationCode } = this.state;
    confirmResult.confirm(verificationCode)
      .then((user) => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }

  render() {
    return (
      <View style={styles.flex}>
        <Icon
            name="comment"
            type='font-awesome'
            size={50}
            color='red'
          />
        <Icon
            name='github-square'
            type='font-awesome'
            size={50}
            color='red'
          />
        <Button
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
