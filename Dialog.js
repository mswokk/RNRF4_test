/*
 * Copyright (C) YBRAIN Inc - All Rights Reserved. 2018.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
//@flow
import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Dialog extends Component <Props, State> {
  render() {
    return (
      <View style={styles.dialog}>
        <Text>Dialog</Text>
        <Button
          title="OK"
          onPress={Actions.pop}/>
      </View>);
  }
}

const styles = StyleSheet.create({
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'grey',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});