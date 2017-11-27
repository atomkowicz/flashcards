import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { purple, gray, white } from '../utils/colors';

class AddDeck extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View>
                <Text>Type deck name below</Text>
                <TextInput
                    style={{ height: 40 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity
                    style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>SUBMIT </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck;

const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginTop: 12,
        padding: 5,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        fontSize: 20
    },
    submitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})