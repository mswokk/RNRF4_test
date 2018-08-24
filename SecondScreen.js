/*
 * Copyright (C) YBRAIN Inc - All Rights Reserved. 2018.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default () => {
  return (
    <View>
      <Text>Second screen</Text>
      <Button
        title="Push secondScreen"
        onPress={() => {
          Actions.secondScreen();
        }}
      />
    </View>
  );
}
