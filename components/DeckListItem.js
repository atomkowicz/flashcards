import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listItem as styles } from '../utils/styles';

class DeckListItem extends Component {
    render() {
        const { title, questions } = this.props;

        return (
            <View>
                <View style={styles.DeckListItem}>
                    <Text style={styles.text}>{title && title.toUpperCase()} </Text>
                    <Text>{questions && questions.length} - Card(s)</Text>
                </View>
            </View>
        )
    }
}

export default DeckListItem;