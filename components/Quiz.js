import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Deck from './Deck';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { purple, gray, white } from '../utils/colors';


class Quiz extends Component {
    render() {
        const deck = this.props;
        const { id, title, navigation } = this.props;

        return (
            <View style={styles.container}>
                <Deck {...deck}
                    style={styles.deck} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddCard')} >
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Quiz')} >
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state, props) => ({
    ...props.navigation.state.params
})

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
    conainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    deck: {
        flexGrow: 2,
        flex: 3,
    },
    buttonContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: white
    }

})