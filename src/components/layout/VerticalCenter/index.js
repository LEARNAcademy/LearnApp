import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'


export default class  extends Component {
  render() {
    const{ centered } = this.props
    return(
      <View style={styles.container}>
        <View style={centered ? styles.centered : ''}>
          {this.props.children}
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  centered: {
    alignSelf: 'center'
  }
})
