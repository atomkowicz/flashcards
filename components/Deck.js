import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { purple, gray, white } from '../utils/colors';


class Deck extends Component {

    render() {
        const { id, title, navigation, questions } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.deck}>
                        <Text style={styles.text}>{title && title.toUpperCase()} </Text>
                        <Text>{questions && questions.length} - Card(s)</Text>
                    </View>
                </View>
                <Text>{JSON.stringify(questions)}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddCard', { id })} >
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!questions.length}
                        style={[styles.button, !questions.length? styles.inactive: ""]}
                        onPress={() => navigation.navigate('Quiz', { questions })} >
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state, props) => ({
    ...props.navigation.state.params,
})

export default connect(mapStateToProps)(Deck);

const styles = StyleSheet.create({
    conainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    deck: {
        marginTop: 5,
        padding: 40,
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
    inactive: {
        opacity: 0.4
    },
    buttonText: {
        color: white
    }

})