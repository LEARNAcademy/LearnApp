import React, { Component } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  Button,
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
    signInWithPhoneUpdate(value)
  }
  submitPhone = ()=>{
    const { auth, signInWithPhoneSubmit } = this.props
    const { phoneSignInForm } = auth
    const { number } = phoneSignInForm
    signInWithPhoneSubmit(number)
  }
  codeUpdated = (value) => {
    const { signInWithPhoneCodeUpdate } = this.props
    signInWithPhoneCodeUpdate(value)
  }
  submitVerificationCode = ()=>{
    const { auth, signInWithPhoneCodeSubmit } = this.props
    const { phoneSignInForm } = auth
    const {
      confirmResultAction,
      verificationCode,
    } = phoneSignInForm
    signInWithPhoneCodeSubmit({confirmResultAction, verificationCode})
  }

  reset = ()=>{
    const { signInWithPhoneReset } = this.props
    signInWithPhoneReset()
  }
  render() {
    const { auth } = this.props
    const { phoneSignInForm } = auth
    const {
      number,
      showVerificationCodeForm,
      verifcationCode,
    } = phoneSignInForm
    return(
      <View style={styles.container}>
        <VerticalCenter centered >
          <FormLabel>
            Where can we Text you an Invite Code?
          </FormLabel>
          <FormInput
            placeholder="Phone Number"
            onChangeText={this.phoneUpdated}
            value={ number }
          >
          </FormInput>
          <Button
            onPress={this.submitPhone}
            title="Submit"
          />
        </VerticalCenter>
        <Modal
          visible={showVerificationCodeForm}
        >
          <VerticalCenter centered>
            <FormLabel>
              Check your Text App for a Code.
            </FormLabel>
            <FormInput
              placeholder="Verification Code"
              onChangeText={this.codeUpdated}
              value={verifcationCode}
            >
            </FormInput>
            <Button
              onPress={this.submitVerificationCode}
              title="Submit"
            />
            <Button
              onPress={this.reset}
              title="Reset"
            />
          </VerticalCenter>
        </Modal>
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
