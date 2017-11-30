import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchDecks } from '../utils/api';
import Deck from './Deck';
import Quiz from './Quiz';
import { purple, gray, white } from '../utils/colors';
import { connect } from 'react-redux';
import { getDecks } from '../actions'

class DeckList extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        this.props.getDecks();
        this.setState({ ready: true });
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')} >
                <Deck {...item} />
            </TouchableOpacity>
        )
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
                <Text> {JSON.stringify(decksList)} </Text>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});