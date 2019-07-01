import React from 'react'
import { View, CheckBox, StyleSheet, TouchableOpacity } from 'react-native'
import TodoItem from './TodoItem'
import DeleteItem from './DeleteItem'
// @flow
type State ={
    isChecked: boolean
}

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.item.completed
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }
    handleValueChange() {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        const { item, handleDeleteItem, handleNavigate } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.checkbox}>
                    <CheckBox
                        value={this.state.isChecked}
                        onValueChange={this.handleValueChange} />
                </View>
                <View style={styles.todoItem}>
                    <TodoItem
                        onPress={handleNavigate}
                        title={item.title}
                        isCompleted={this.state.isChecked} />
                </View>
                <View style={styles.deleteItem} >
                    <DeleteItem onPress={handleDeleteItem} />
                </View>
            </View>
            // <View style={styles.container}>
            // </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        flex: 1
    },
    todoItem: {
        flex: 4
    },
    deleteItem: {
        flex: 1
    }

})