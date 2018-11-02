/*
 * Copyright (C) YBRAIN Inc - All Rights Reserved. 2018.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @flow
 */

import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {ActionConst, Actions} from 'react-native-router-flux';

export default class InitialScreen extends Component<{}, State> {
  render() {
    return (
      <View>
        <Text>Initial screen</Text>
        <Button
          title="Push second screen"
          onPress={() => Actions.secondScreen()}
        />

        <Button
          title="Reset as second screen"
          onPress={() => Actions.secondScreen({type: ActionConst.RESET})}
        />

        <Button
          title="Show lightbox dialog"
          onPress={() => Actions.dialog()}
        />

        <Button
          title="Exit"
          onPress={() => Actions.pop()}
        />
      </View>
    );
  }
}
