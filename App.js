import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import { setLocalNotification } from './utils/helpers';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar barStyle="light-content" style={styles.statusBar} />
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
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  AddCard: { screen: AddCard },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    marginTop: 30
  }
});
