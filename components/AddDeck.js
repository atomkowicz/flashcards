import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { saveDeckTitle } from '../actions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { formStyles as styles } from '../utils/styles';

class AddDeck extends Component {
    state = {
        deckTitle: '',
    }

    submit = () => {
        const { navigation, saveDeckTitle } = this.props;
        const { deckTitle } = this.state
        const title = id = deckTitle;

        if (!deckTitle) {
            Alert.alert(
                'Form validation',
                'Deck title value cannot be empty'
            )
        } else {
            saveDeckTitle(title);
            this.setState({ deckTitle: this.getRandomTitle() })
            navigation.navigate('Deck', { id: title })
        }
    }

    getRandomTitle = () => {
        const titles = ["Javascript", "React", "Java", "C#", "Ruby"];
        min = Math.ceil(0);
        max = Math.floor(7);
        const r = Math.floor(Math.random() * (max - min + 1)) + min;
        return titles[r]
    }

    componentWillMount = () => {
        this.setState({ deckTitle: this.getRandomTitle() })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    <Text style={styles.text}>Type deck title</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ deckTitle: text })}
                        defaultValue={this.state.deckTitle}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={this.submit}
                        style={styles.submitBtn}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (decks) => {
    return decks
}

export default connect(
    mapStateToProps,
    { saveDeckTitle }
)(AddDeck);