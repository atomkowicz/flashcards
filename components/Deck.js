import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple, gray, white } from '../utils/colors';

class Deck extends Component {
    render() {
        const { title, questions } = this.props;

        return (
            <View>
                <View style={styles.deck}>
                    <Text style={styles.text}>{title && title.toUpperCase()} </Text>
                    <Text>{questions && questions.length} - Card(s)</Text>
                </View>
            </View>
        )
    }
}

export default Deck;

const styles = StyleSheet.create({
    deck: {
        marginTop: 5,
        padding: 40,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        fontSize: 20
    }
})