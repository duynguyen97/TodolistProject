import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
// @flow
type Props={
    onPress: function,
}
export default function (props:Props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {/* <Text style={{fontSize: 20,  textAlign: 'center', height:32, fontWeight:"700"}}>
                <FontAwesome>
                    {Icons.times}
                </FontAwesome>
            </Text> */}
                <Image source={require('../images/close.png')} style={{ width: 15, height: 15 }} />
            </View>
        </TouchableOpacity>
    );
}