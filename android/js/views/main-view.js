import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class MainView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <View style={style.main}>
        <Text>Tämä on esimerkki, kuinka tehdään React Nativella sovellus.</Text>
        <Text>{this.props.visitedAlt? 'Kävit toisella sivulla aikaisemmin' : ''}</Text>
        <Button
          title="Vaihda sivua"
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
