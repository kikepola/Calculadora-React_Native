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
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4) * 3,
    }
})

export default props =>{
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}