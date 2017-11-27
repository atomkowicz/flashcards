import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar barStyle="light-content" style={{ marginTop: 30 }} />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    },
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      style: {
        height: 56,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

const MainNavigator = StackNavigator({
  Main: { screen: Tabs },
  Quiz: { screen: Quiz },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
