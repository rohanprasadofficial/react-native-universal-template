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
    rootTag: document.getElementById('root'),
    initialProps: {},
  });
}
