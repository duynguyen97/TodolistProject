import React from 'react';
import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
// @flow
type State={
    username:string,
    password: string
}
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
const userInfo = {
    username: 'admin',
    password: '123'
}
export default class SignInScreen extends React.Component<{},State> {
    static navigationOptions = {
        title: 'Please sign in',
    };
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.login}>
                    <TextInput
                        placeholder="Enter Username"
                        style={styles.text}
                        onChangeText={(username)=> this.setState({username})}
                    />
                    <TextInput
                        placeholder="Enter Password"
                        secureTextEntry
                        style={styles.text}
                        onChangeText={(password)=> this.setState({password})}
                    />
                    <Button 
                        color = '#FFC300'
                        title="Sign in!"
                        onPress={this._signInAsync}
                        />
                </View>
            </View>
        );
    }

    _signInAsync = async ():void => {
        if(this.state.username === userInfo.username && this.state.password === userInfo.password){
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        }else{
            alert("Wrong username or password")
        }
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3C97CB'
    },
    login: {
        width: 250,
        height: 140
    },
    text: {
        flex: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff'
    }

});