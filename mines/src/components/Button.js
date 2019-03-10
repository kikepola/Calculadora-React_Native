import React from 'react'
import{
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
}from 'react-native'


const styles = StyleSheet.create({
  button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#262626',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#0d0d0d',
        color: '#fff',
    },
})

export default props =>{
  const stylesButton = [styles.button]
  return(
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}
