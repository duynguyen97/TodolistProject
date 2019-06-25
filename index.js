/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Navigation from './NavigationDemo'
import AuthencationFlow from './AuthencationFlow'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AuthencationFlow);
