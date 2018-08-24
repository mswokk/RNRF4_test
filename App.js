/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Lightbox, Router, Scene} from 'react-native-router-flux';
import SecondScreen from './SecondScreen';
import InitialScreen from './InitialScreen';
import Dialog from './Dialog';

export default function AppContainer() {
  return (
    <Router>
      <Lightbox>
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

        <Scene
          key="dialog"
          component={Dialog}
        />
      </Lightbox>
    </Router>
  );
}