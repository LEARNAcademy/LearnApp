import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements'

import { connectAuth } from 'AppRedux';

import Theme from '../../styles/Theme'
import VerticalCenter from '../../components/layout/VerticalCenter'

class PhoneAuthScreen extends Component {
  phoneUpdated = (value)=>{
    const { signInWithPhoneUpdate } = this.props
    console.log(signInWithPhoneUpdate)
    signInWithPhoneUpdate(value)

  }
  render() {
    return(
      <View style={styles.container}>
        <VerticalCenter centered >
          <FormLabel>
            Where can we Text you an Invite Code?
          </FormLabel>
          <FormInput
            placeholder="Phone Number"
            onChangeText={this.phoneUpdated}
          >
          </FormInput>
        </VerticalCenter>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Theme.Colors.darkBackground,
    height: '100%',
  }
})

export default connectAuth()(PhoneAuthScreen)
