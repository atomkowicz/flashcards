import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import { fetchDecks } from '../utils/api';
import DeckListItem from './DeckListItem';
import Quiz from './Quiz';
import Deck from './Deck';
import { purple, gray, white } from '../utils/colors';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import { DECKS_STORAGE_KEY } from '../utils/api';

class DeckList extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        this.props.getDecks();
        this.setState({ ready: true });
    }

    renderItem = ({ item }) => {
        const { navigation } = this.props;
        const { id } = item;

        return (
            <TouchableOpacity
                style={{ height: 150 }}
                onPress={() => navigation.navigate('Deck', { id })} >
                <DeckListItem {...item} />
            </TouchableOpacity>
        )
    }

    clearDecks = () => {
        AsyncStorage
            .removeItem(DECKS_STORAGE_KEY)
            .then(this.props.getDecks());
    }

    render() {
        const { ready } = this.state;
        const { decks } = this.props;

        let decksList = [];

        if (decks) {
            decksList = Object.keys(decks).map(key => decks[key]);
        }

        if (this.state.ready === false) {
            return <ActivityIndicator size={'large'} style={styles.container} />
        }

        return (
            <View>
                <TouchableOpacity onPress={this.clearDecks} >
                    <Text style={{ padding: 20 }}> clear </Text>
                </TouchableOpacity>
                {decksList && <FlatList
                    data={decksList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        decks: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDecks: () => dispatch(getDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});