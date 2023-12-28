import React from "react";
import { TextInput, StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWith: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBotton: 10
    }, 
    error: {
        borderColor: 'red'
    }
})


const StyledTextInput = ({style = {}, error, ...props}) => {
    const inputStyle = [
        styles.textInput,
        styles,  // Other styles that we could send out of the componenet to this. 
        error && styles.error
    ]

    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput