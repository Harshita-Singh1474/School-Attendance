import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHeader from './components/AppHeader';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen:SummaryScreen
})

const AppContainer = createAppContainer(AppNavigator);
