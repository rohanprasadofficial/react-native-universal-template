/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent('reactnexus', () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication('reactnexus', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}