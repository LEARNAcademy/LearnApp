import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Theme from '../../styles/Theme'
import VerticalCenter from '../../components/layout/VerticalCenter'

export default class PhoneAuthScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <VerticalCenter centered >
          <Text>
            Login with Phone
          </Text>
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
