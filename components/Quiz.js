import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { clearDecks } from '../utils/api'


class Quiz extends Component {
    render() {
        clearDecks();
        
        return (
            <View>
                <Text>Qhhhhz  </Text>
            </View>
        )
    }
}

export default Quiz;