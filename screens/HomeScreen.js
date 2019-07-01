import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
// @flow
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerActions } from 'react-navigation';
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome to the app!',
      headerLeft: (
        <Ionicons
          name="ios-menu"
          size={24}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" />
        <View style={{ marginBottom: 15 }}>
          <Button title="Todolist manager" onPress={this._showMoreApp} />
        </View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = ():void => {
    this.props.navigation.navigate('Todos');
  };

  _signOutAsync = async ():void => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});