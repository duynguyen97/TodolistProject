import React from 'react'
import { View, TextInput } from 'react-native'
export default function (props) {
    const { placeholder,value,onSubmitEditing,onChangeText } = props
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                value={value}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
            />
        </View>
    );
}