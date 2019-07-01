import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from '../screens/HomeScreen'
import OtherScreen from '../screens/OtherScreen'
import SettingScreen from '../screens/Setting'
import Todos from '../screens/Todos'
import Todo from '../screens/Todo.js'
import { createBottomTabNavigator, createAppContainer, createStackNavigator,NavigationScreenProps } from 'react-navigation';
// @flow
const AppStack = createStackNavigator({ Home: HomeScreen, Todos, Todo });

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName:string;
    let IconComponent = Ionicons;
    if (routeName === "HomeTab") {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    } else if (routeName === "Settings") {
        iconName = `ios-options${focused ? '' : '-outline'}`;
    }
    return <Ionicons name={iconName} size={25} color={tintColor}/>;
}
export default createBottomTabNavigator(
    {
        HomeTab: AppStack,
        Settings: SettingScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            tabBarIcon: ({focused,tintColor}) =>
                getTabBarIcon(navigation, focused, tintColor)
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }
    }
)
