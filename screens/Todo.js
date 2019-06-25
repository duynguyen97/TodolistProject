
import React from 'react'
import { Text } from 'react-native'
export default class Todo extends React.Component {
    static navigationOptions = {
        title: 'Todo',
    };

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('name')
        return (
            <Text>{item.title}</Text>
        )
    }
}