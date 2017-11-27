import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchDecks } from '../utils/api';
import Deck from './Deck';

class DeckList extends Component {
    state = {
        decks: null
    }

    componentDidMount() {
        fetchDecks().then(res => {
            this.setState({ decks: Object.keys(res) })
        });
    }



    render() {
        return (
            <View>
                {this.state.decks &&
                    this.state.decks.map(deck =>
                        <Text key={deck}>Decklist: {deck}</Text>
                    )}

            </View>
        )
    }
}

export default DeckList;

