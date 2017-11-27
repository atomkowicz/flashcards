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
            const decks = Object.keys(res).map(key => (res[key]));
            this.setState({ decks: decks });
        });
    }

    renderItem = ({ item }) => {
        return <Deck {...item} />
    }

    render() {
        const { decks } = this.state;
        return (
            <View>
                {decks && <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />}
            </View>
        )
    }
}

export default DeckList;

