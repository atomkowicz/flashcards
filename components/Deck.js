import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
    render() {
        const { title } = this.props
        return (
            <View>
                <Text>Deck: {title}</Text>
            </View>
        )
    }
}

export default Deck;