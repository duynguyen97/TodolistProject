import React from 'react';
import { Image, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TabNavigation from "./TabNavigation";
import Home from '../screens/HomeScreen'
import SignOut from '../screens/SignOut'
import SettingScreen from '../screens/Setting'
import { DrawerItems, SafeAreaView } from 'react-navigation';

TabNavigation.navigationOptions = {
    drawerLabel: "Home!",
    drawerIcon: () => (
        <Image
            source={require('../images/home.png')}
            style={{ width: 24, height: 24 }}
        />
    )
}
SignOut.navigionOptions = {
    drawerLabel: "Signout",
    drawerIcon: () => (
        <Image
            source={require('../images/sign-out.png')}
            style={{ width: 24, height: 24 }}
        />
    )
}
SettingScreen.navigationOptions = {
    drawerLabel: "Setting",
    drawerIcon: () => (
        <Image
            source={require('../images/settings.png')}
            style={{ width: 24, height: 24 }}
        />
    )
}
const CustomDrawerContentComponent = props => (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
        {/* <SignOut /> */}
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const drawerNavigation = createDrawerNavigator(
    {
        HomeDrawer: TabNavigation,
        SettingDrawer: SettingScreen,
    },
    {
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
)

export default drawerNavigation;