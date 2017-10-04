/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import ToastModule from './android/js/modules/Toast';



class AndroidTest extends Component {
  static navigationOptions = {
    title: "Home"
  }


  render() {
    const  {navigate}  = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Moi</Text>
        <Button title="Vaihda sivua"
          onPress={() => navigate('Alt')}
        />
      </View>
    );
  }
}

class AltScreen extends Component {
  static navigationOptions = {
    title: "Alt"
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Moikka taas</Text>
        <Button title="Vaihda sivua"
          onPress={() => ToastModule.show("Hahaa", ToastModule.SHORT)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export const App = StackNavigator({
  Home: {screen: AndroidTest},
  Alt: {screen: AltScreen},
});

AppRegistry.registerComponent('AndroidTest', () => App);
