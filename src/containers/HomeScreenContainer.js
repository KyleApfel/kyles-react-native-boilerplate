import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CounterContainer from '../features/counter/CounterContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'BoilerPlate',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Your Money Sir</Text>
        <CounterContainer />
      </View>
    );
  }
}
