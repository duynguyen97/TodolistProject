import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoading'
import SignInScreen from './screens/SignIn'
import BottomTab from './navigations/TabNavigation'
import DrawerNavigation from "./navigations/DrawerNavigation";
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigation,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
