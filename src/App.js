/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';

import { Portal } from 'react-native-paper';
import UIApp from './UIApp';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {

  return (
   <Portal.Host>
    <UIApp/>
   </Portal.Host>
  );
};
export default App;
