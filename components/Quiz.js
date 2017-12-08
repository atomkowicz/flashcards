import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { purple, gray, white } from '../utils/colors';


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: this.props.questions[0].question,
            score: 0
        }
    }

    scoreUp = () => {
        this.setState((prevState) => (
            { score: prevState.score + 1 }
        ))

    }
    scoreDown = () => {
        this.setState((prevState) => ({score: prevState.score - 1 }
        ))
    }

    render() {
        const { questions } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.deck}>
                        <Text style={styles.text}>{this.state.question}</Text>
                    </View>
                </View>
                <Text>{this.state.score}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.scoreDown() }} >
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.scoreUp() }} >
                        <Text style={styles.buttonText}>Correct</Text>
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
    buttonText: {
        color: white
    }

})