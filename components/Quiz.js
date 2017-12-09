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
            answer: this.props.questions[0].answer,
            showAnswer: false,
            score: 0,
            questionNum: 0,
            quizEnds: false
        }
    }

    submitAnswer = (score) => {
        const { questions } = this.props;

        this.setState((prevState) => {
            const questionNum =
                (prevState.questionNum < questions.length - 1)
                    ? prevState.questionNum + 1
                    : prevState.questionNum;

            return (
                {
                    score: prevState.score + score,
                    questionNum: questionNum,
                    question: questions[questionNum].question,
                    answer: questions[questionNum].answer,
                    showAnswer: false,
                    quizEnds: prevState.questionNum === questions.length - 1
                }
            )
        })

    }

    showAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    resetQuiz = () => {
        this.setState({
            question: this.props.questions[0].question,
            answer: this.props.questions[0].answer,
            showAnswer: false,
            score: 0,
            questionNum: 0,
            quizEnds: false
        })
    }

    render() {
        const { questions, id, navigation } = this.props;
        const { questionNum, quizEnds } = this.state;
        const scorePerc = Math.ceil(this.state.score / questions.length * 100);

        return (
            <View style={{ flex: 1 }}>
                {!quizEnds &&
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>
                            {this.state.question}
                        </Text>
                        <Text style={{ fontSize: 14, marginTop: 20, color: purple }}>
                            {questions.length - questionNum - 1} question(s) left</Text>
                        <TouchableOpacity
                            onPress={() => { this.showAnswer() }} >
                            <Text style={{ fontSize: 20, marginTop: 20, color: purple }}>
                                {this.state.showAnswer ? this.state.answer : "See the answer"}
                            </Text>
                        </TouchableOpacity>
                    </View>}
                {!quizEnds &&
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { this.submitAnswer(0) }} >
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { this.submitAnswer(1) }} >
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableOpacity>
                    </View>}

                {quizEnds &&
                    <View style={{ flex: 1}}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.text}>
                                Your score: {this.state.score} / {questions.length} - {scorePerc}%</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('Deck', { id })}>
                                <Text style={styles.buttonText}>Go back to deck</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => { this.resetQuiz() }} >
                                <Text style={styles.buttonText}>Start again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
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
        flex: 1,
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
        fontSize: 25,
        marginTop: 20,
    },
    buttonContainer: {
        margin: 10,
        flex: 1,
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