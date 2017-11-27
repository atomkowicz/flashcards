import React, {Component} from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
    render() {
        console.log(this.props);
        
        return (
            <View>
                <Text>Deck</Text>
            </View>
        )
    }
}

export default Deck;