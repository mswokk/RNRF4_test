/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SecondScreen from './SecondScreen';
import InitialScreen from './InitialScreen';

export default function AppContainer() {
  return (
    <Router>
      <Scene hideNavBar>
        <Scene
          initial
          key="initialScreen"
          component={InitialScreen}
        />

        <Scene
          key="secondScreen"
          component={SecondScreen}
        />
      </Scene>
    </Router>
  );
}