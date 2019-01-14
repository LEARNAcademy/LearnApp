import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import{ Button } from 'react-native-elements'

import Theme from '../../styles/Theme'

export default class  extends Component {
  render() {
    const{ onPress, icon, title } = this.props
    return(
      <Button
        onPress={ onPress }
        icon={ icon }
        title={ title }
        buttonStyle={styles.button}
      />
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: Theme.Colors.superLightBackground,
    borderColor: Theme.Colors.lightBorder,
    borderWidth: 3,
    borderRadius: 25,
    width: '100%',
  }
})
