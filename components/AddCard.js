import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import { formStyles as styles } from '../utils/styles';

class AddCard extends Component {
    state = {
        question: 'what is react?',
        answer: 'This is library for creating js apps.'
    }

    submit = () => {
        const card = this.state;
        const { question, answer } = this.state;
        const { id, deck, deck: { questions, title }, navigation, addCardToDeck } = this.props;

        if (!question || !answer) {
            Alert.alert(
                'Form validation',
                'Question and answer cannot be empty'
            )
        } else {
            const updatedDeck = {
                [title]: {
                    ...deck,
                    ["questions"]: [...questions, card]
                }
            }

            addCardToDeck(card, id, updatedDeck, navigation);
            navigation.goBack()
        }
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

export default connect(mapStateToProps, { addCardToDeck })(AddCard);