import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

let digit = "0"
let digit_str = ""
let secondarie_value = "0"
let operation_selected = ""

export default class App extends React.Component {
  state ={
    displayValue: '0'
  }

  addDigit = n => {
    digit = digit + n
    digit_str = digit_str + n
    this.setState({displayValue: digit_str })
  }

  clearMemory = () => {
    digit = "0"
    secondarie_value = "0"
    digit_str = ""
    this.setState({displayValue: '0'})
  }

  setOperation = operation => {
    if(operation == '+'){
      secondarie_value = parseInt(digit) + parseInt(secondarie_value)
      digit = ""
      digit_str = digit_str + "+"
      this.setState({displayValue: digit_str})
    }
    if(operation == '='){
      secondarie_value = parseInt(digit) + parseInt(secondarie_value)
      this.setState({displayValue: secondarie_value.toString()})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={()=>this.setOperation('/')}/>
          <Button label='7' onClick={()=>this.addDigit(7)}/>
          <Button label='8' onClick={()=>this.addDigit(8)}/>
          <Button label='9' onClick={()=>this.addDigit(9)}/>
          <Button label='*' operation onClick={()=>this.setOperation('*')}/>
          <Button label='4' onClick={()=>this.addDigit(4)}/>
          <Button label='5' onClick={()=>this.addDigit(5)}/>
          <Button label='6' onClick={()=>this.addDigit(6)}/>
          <Button label='-' operation onClick={()=>this.setOperation('-')}/>
          <Button label='1' onClick={()=>this.addDigit(1)}/>
          <Button label='2' onClick={()=>this.addDigit(2)}/>
          <Button label='3' onClick={()=>this.addDigit(3)}/>
          <Button label='+' operation onClick={()=>this.setOperation('+')}/>
          <Button label='0' double onClick={()=>this.addDigit(0)}/>
          <Button label='.' onClick={()=>this.addDigit('.')}/>
          <Button label='=' operation onClick={()=>this.setOperation('=')}/>
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
