import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { purple, gray, white } from '../utils/colors';
import { saveDeckTitle } from '../actions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class AddDeck extends Component {
    state = {
        deckTitle: 'JavaScript',
    }

    submit = () => {
        const title = this.state.deckTitle;
        const deck = {
            [title]: {
                "title": title,
                "questions": []
            }
        }

        this.props.saveDeck(title)
        this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }))

    }

    render() {
        return (
            <View>
                <Text>Type deck title</Text>
                <TextInput
                    style={{ height: 40 }}
                    onChangeText={(text) => this.setState({ deckTitle: text })}
                    defaultValue={this.state.deckTitle}
                />
                <TouchableOpacity
                    onPress={this.submit}
                    style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>SUBMIT </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return decks
}

function mapDispatchToProps(dispatch) {
    return {
        saveDeck: (deck) => dispatch(saveDeckTitle(deck))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

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