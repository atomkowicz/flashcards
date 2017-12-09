import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { purple, gray, white } from '../utils/colors';
import { saveDeckTitle } from '../actions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class AddDeck extends Component {
    state = {
        deckTitle: '',
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
        this.setState({ deckTitle: this.getRandomTitle() })
        this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }))
    }

    getRandomTitle() {
        const titles = ["Javascript", "React", "Java", "C#", "Ruby"];
        min = Math.ceil(0);
        max = Math.floor(7);
        const r = Math.floor(Math.random() * (max - min + 1)) + min;
        return titles[r]
    }

    componentWillMount = () => {
        this.setState({ deckTitle: this.getRandomTitle() })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    <Text style={styles.text}>Type deck title</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ deckTitle: text })}
                        defaultValue={this.state.deckTitle}
                    />
                </View>
                <View style={{ flex: 1 }}>
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
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    input: {
        height: 40, 
        marginTop: 10
    },
    text: {
        marginTop: 10
    },
    submitBtn: {
        padding: 20,
        margin: 5,
        flex: 1,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})