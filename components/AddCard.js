import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import { purple, gray, white } from '../utils/colors';

class AddCard extends Component {
    state = {
        question: 'what is react?',
        answer: 'This is library for creating js apps.'
    }

    submit = () => {
        const card = this.state;
        const { id, deck, deck: { questions, title }, navigation, addCardToDeck } = this.props;

        const updatedDeck = {
            [title]: {
                ...deck,
                ["questions"]: [...questions, card]
            }
        }

        addCardToDeck(card, id, updatedDeck, navigation);
        navigation.navigate('Deck', { id })

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Add new card for deck: {this.props.id}</Text>
                <View style={{ flex: 5 }}>
                    <Text style={styles.label}>Type question:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ question: text })}
                        defaultValue={this.state.question}
                    />
                    <Text style={styles.label}>Type answer:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ answer: text })}
                        defaultValue={this.state.answer}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={this.submit}
                        style={styles.submitBtn}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state, props) => {
    const { id } = props.navigation.state.params
    return {
        id: props.navigation.state.params.id,
        deck: state[id]
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        addCardToDeck: (card, deckId, deck) => dispatch(addCardToDeck(card, deckId, deck))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInput: {
        height: 40,
        marginTop: 10,
        fontSize: 14,
    },
    label: {
        padding: 10,
        fontSize: 14,
        marginTop: 10,
    },
    submitBtn: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: white
    }
})