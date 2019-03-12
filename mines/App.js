import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Starting Mines</Text> 
        <Text style={styles.instructions}>Grid size
          {params.getColumnsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened/>
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded/>
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
  },

});
