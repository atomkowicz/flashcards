import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { purple, gray, white } from '../utils/colors';


class Deck extends Component {

    render() {
        const { navigation } = this.props;
        const { id, title, questions } = this.props.item;
        const buttonStyle = questions.length === 0
            ? [styles.buttonInactive]
            : styles.button

        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}>
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
                        disabled={!questions.length}
                        style={buttonStyle}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deck: {
        flex: 2,
        marginTop: 5,
        padding: 40,
        backgroundColor: white, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        fontSize: 30
    },
    buttonContainer: {
        flex: 1,
        margin: 10,
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
    buttonInactive: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.4
    },
    buttonText: {
        color: white
    }

})