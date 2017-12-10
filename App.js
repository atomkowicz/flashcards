import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import { setLocalNotification } from './utils/helpers';
import { appStyles as styles } from './utils/styles';
import MainNavigator from './navigation'

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
