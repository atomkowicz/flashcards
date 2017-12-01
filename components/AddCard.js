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
        console.log(this.state)
        console.log(this.props.id)

        const card = this.state;
        const { id } = this.props;
        this.props.addCardToDeck(card, id)
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
                        <Text style={styles.submitBtnText}>SUBMIT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state, props) => {
    return {
        id: props.navigation.state.params.id
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        addCardToDeck: (card, deckId) => dispatch(addCardToDeck(card, deckId))
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