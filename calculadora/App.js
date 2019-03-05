import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends React.Component {
  state ={
    displayValue: '0'
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC'/>
          <Button label='7' />
          <Button label='8' />
          <Button label='/' />
          <Button label='9' />
          <Button label='4' />
          <Button label='5' />
          <Button label='*' />
          <Button label='6' />
          <Button label='1' />
          <Button label='2' />
          <Button label='-' />
          <Button label='3' />
          <Button label='0' />
          <Button label='+' />
          <Button label='.' />
          <Button label='=' />
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
