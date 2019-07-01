import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput } from 'react-native';
import TodoItem from '../components/TodoItem'
import Item from '../components/Item'
import SearchBar from '../components/SearchBar'

import type {Todo} from '../interface/Todo'
// @flow
const fetch = require('node-fetch');

type State = {
    isLoading: boolean,
    fillText: string,
    todoList: Array<Todo>
}
export default class Todos extends Component<{},State> {
    static navigationOptions = {
        title: 'Todos',
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            fillText: '',
            todoList: []
        }
        this.hanldeSubmitEditing = this.hanldeSubmitEditing.bind(this)
        // this.handleNavigate = this.handleNavigate.bind(this)
        // this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    async componentDidMount():void {
        try {
            let response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/',
            );
            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                todoList: responseJson,
            });
        } catch (error) {
            console.error(error);
        }
    }
    // handleValueChange(item) {
    //     return () => {
    //         const todoList = this.state.todoList;
    //         const index = todoList.indexOf(item)
    //         this.setState({
    //             ...this.state,
    //             todoList: [
    //                 ...todoList.slice(0, index),
    //                 { ...todoList[index], completed: !todoList[index].completed },
    //                 ...todoList.slice(index + 1)
    //             ]
    //         })
    //     }
    // }
    hanldeSubmitEditing(e: SyntheticEvent<T>): void {
        const todoList = this.state.todoList;
        const inputText = e.nativeEvent.text.trim();
        if(!inputText){
            return;
        }
        this.setState({
            fillText: '',
            todoList: [
                { userId: 1, id: todoList.length, title: inputText, completed: false },
                ...todoList.slice(0)
            ],
        })
    }
    handleNavigate(item: Todo, navigation):void {
        navigation.navigate('Todo', {
            name: item
        })
    }
    handleDeleteItem(item: Todo): void {
        const todoList = this.state.todoList;
        const index = todoList.indexOf(item);
        todoList.splice(index, 1);
            this.setState({
                todoList: [...todoList]
            })
    }
    render() {
        const { navigation } = this.props
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Enter every thing..."
                    value={this.state.fillText}
                    onSubmitEditing={this.hanldeSubmitEditing}
                    onChangeText={(fillText) => { this.setState({ fillText }) }}
                />
                <FlatList
                    data={this.state.todoList}
                    renderItem={({ item }) =>
                        <Item
                            item={item}
                            handleNavigate={()=>this.handleNavigate(item, navigation)}
                            handleDeleteItem={()=>this.handleDeleteItem(item)}
                        />
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 30
    }
});
