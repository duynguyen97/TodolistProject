import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    CheckBox,
    TouchableOpacity
} from 'react-native'
// @flow
type Props = {
    title: string,
    isCompleted: boolean,
    onPress: function
}
export default class TodoItem extends React.Component<Props> {
    constructor(props) {
        super(props)
        // this.state = {
        //     isChecked: false,
        //     styleText: [
        //         styles.text,
        //     ]
        // }
        // this.onValueChange = this.onValueChange.bind(this)
        // this.handlePress = this.handlePress.bind(this)
    }
    // onValueChange() {
    //     if (!this.state.isChecked) {
    //         this.setState({
    //             isChecked: true,
    //             styleText: [
    //                 styles.text,
    //                 styles.textLineThrough
    //             ]
    //         })
    //     } else {
    //         this.setState({
    //             isChecked: false,
    //             styleText: [
    //                 styles.text
    //             ]
    //         })
    //     }
    // }
    // handlePress(item) {
    //     return (e) => { console.log(item.title) }
    // }
    render() {
        const { title,isCompleted, onPress } = this.props
        if (isCompleted) {
            return (
                <TouchableOpacity onPress={onPress}>
                    <View  >
                        <Text style={[styles.text, styles.textLineThrough]}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={onPress}>
                    <View >
                        <Text style={[styles.text]}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>

            );
        }
    }
}


const styles = StyleSheet.create({
    text: {
        textAlignVertical: 'center',
        height: 32
    },
    textLineThrough: {
        textDecorationLine: 'line-through',
        opacity: .3,
    }
});