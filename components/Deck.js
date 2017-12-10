import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { styles } from '../utils/styles';

class Deck extends Component {

    render() {
        const { item, navigation } = this.props;
        const questions = item ? item.questions : [];
        const title = item ? item.title : "";
        const id = item ? item.id : "";
        const canStartQuiz = !!questions;

        return (
            <View style={styles.container}>
                <View style={styles.deckContainer}>
                    <View style={styles.deck}>
                        <Text style={styles.text}>{title && title.toUpperCase()} </Text>
                        <Text>{questions && questions.length} - Card(s)</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddCard', { id })} >
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!canStartQuiz}
                        style={canStartQuiz ? [styles.buttonInactive] : styles.button}
                        onPress={() => navigation.navigate('Quiz', { questions, id })} >
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state, props) => {
    const { id } = props.navigation.state.params;
    return ({
        item: state[id]
    })
}

export default connect(mapStateToProps)(Deck);