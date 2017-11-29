import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchDecks } from '../utils/api';
import Deck from './Deck';
import Quiz from './Quiz';
import { purple, gray, white } from '../utils/colors';

class DeckList extends Component {
    state = {
        decks: null,
        ready: false
    }

    componentDidMount() {
        fetchDecks().then(result => {
            if (result) {
                const decks = Object.keys(result).map(key => (result[key]));   
                this.setState({
                    decks,
                    ready: true
                });
            }
        });
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Quiz')} >
                <Deck {...item} />
            </TouchableOpacity>
        )
    }

    render() {
        const { decks, ready } = this.state;

        if(decks) console.log(decks);
       
        if (this.state.ready === false) {
            return <ActivityIndicator size={'large'} style={styles.container} />
        }
        return (
            <View>
                <View>
                <Text> {JSON.stringify(decks)}</Text>
                {decks && <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />}
            </View>
            </View>
        )
    }
}

export default DeckList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});