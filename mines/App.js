import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Button';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button label="Start"/ onClick={()}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap:'wrap',
  }
});
