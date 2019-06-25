import React from 'react';
import {
    Text,
    AsyncStorage,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
class SignOut extends React.Component {

    render() {
        return (
            <TouchableHighlight
                onPress={async () => {
                    await AsyncStorage.clear();
                }}>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 20 }}>
                    <Image source={require('../images/sign-out.png')}
                        style={{ width: 24, height: 24, marginRight: 30 }}
                    />
                    <Text>Sign out</Text>
                </View>
            </TouchableHighlight>

        )
    }
}
export default SignOut;