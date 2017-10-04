import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class AltView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <View style={style.main}>
        <Text>Tämä on toinen sivu sovelluksessa</Text>
        <Button
          title="Palaa takaisin"
          onPress={this.props.handlePress} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {

    height: 60,
    justifyContent: 'center',
  }

});
