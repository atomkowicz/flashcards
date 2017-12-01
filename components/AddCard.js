import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';

class AddCard extends Component {
    state = {
        question: 'what is react?',
        answer: 'This is library for creating js apps.'
    }

    submit = () => {
        const card = this.state;
        const { id, deck, deck: { questions, title } } = this.props;

        const updatedDeck = {
            [title]: {
                ...deck,
                ["questions"]: [...questions, card]
            }
        }

        console.log("updatedDeck?????????????????????????")
        console.log(updatedDeck)

        this.props.addCardToDeck(card, id, updatedDeck)
        this.props.navigation.navigate('Main')
    }
    render() {
        return (
            <View>
                <Text>Add new card for deck: {this.props.id}</Text>
                <View>
                    <Text style={styles.label}>Type question:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ question: text })}
                        defaultValue={this.state.question}
                    />
                    <Text style={styles.labeltextInput}>Type answer:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ answer: text })}
                        defaultValue={this.state.answer}
                    />
                    <TouchableOpacity
                        onPress={this.submit}
                        style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>SUBMIT</Text>
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
    textInput: {
        height: 40
    },
    label: {
        padding: 10
    }
})