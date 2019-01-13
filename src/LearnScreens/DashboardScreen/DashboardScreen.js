// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { pushUnauthenticated } from 'LearnNavigation';
import firebase from 'react-native-firebase'
import { connectAuth } from 'AppRedux';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class DashboardScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut = ()=>{
    const{ signOut } = this.props
    signOut()
  }

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={this.signOut}>
          <Text>Click here to back to login page!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connectAuth()(DashboardScreen)
