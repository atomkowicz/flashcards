import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddCard from './AddCard';
import { connect } from 'react-redux'
import { purple } from '../utils/colors';
import { styles } from '../utils/styles';
import FlipCard from 'react-native-flip-card'
import {
    getDailyReminderValue,
    clearLocalNotification,
    setLocalNotification
} from '../utils/helpers'


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

            return ({
                score: prevState.score + score,
                questionNum: questionNum,
                question: questions[questionNum].question,
                answer: questions[questionNum].answer,
                showAnswer: false,
                quizEnds: prevState.questionNum === questions.length - 1
            })
        })

        clearLocalNotification()
            .then(setLocalNotification)

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

                        <FlipCard
                            style={styles.cardContainer}
                            perspective={1000}
                            flipHorizontal={true}
                            flipVertical={false}
                            flip={false}>
                            {/* Face Side */}
                            <View style={styles.card}>
                                <Text>
                                    Question:
                                </Text>
                                <Text style={styles.text}>
                                    {this.state.question}
                                </Text>
                                <Text style={{ fontSize: 14, marginTop: 20 }}>
                                    Tap card to see the answer
                                </Text>
                            </View>
                            {/* Back Side */}
                            <View style={styles.card}>
                                <Text>
                                    Answer:
                                </Text>
                                <Text style={{ fontSize: 20, marginTop: 20, color: purple }}>
                                    {this.state.answer}
                                </Text>
                            </View>
                        </FlipCard>

                        <Text>
                            {questions.length - questionNum - 1} question(s) left
                        </Text>
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
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.text}>
                                Your score: {this.state.score} / {questions.length} - {scorePerc}%</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.goBack()}>
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