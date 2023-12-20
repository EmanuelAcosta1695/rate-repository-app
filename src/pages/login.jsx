import React from "react";
import { Formik, useField } from 'formik'
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props}) => {
    // field => Value of the field that we send
    // meta => Field meta information as validations
    // helpers => They are to update the field. For example, contains setValue.
    const [field, meta, helpers] = useField(name);

    <StyledTextInput  
        value={field.value}
        onChangeText={value => helpers.setValue(value)} // we are changing the value field into initialValues.
    />
}

export default function LoginPage () {
    // Formik receives a function as children
    return <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {( handleSubmit ) => {
            return (
                <View style={styles.form}>
                    {/* <StyledTextInput 
                        placeholder='E-mail' 
                        value={values.email} 
                        onChangeText={handleChange('email')} // we are changing the email field into initialValues.
                    /> */}
                    <FormikInputValue
                        name='email' 
                        placeholder='E-mail' 
                    />
                    <FormikInputValue
                        name='password'     
                        placeholder='Password' 
                    />
                    <Button onPress={handleSubmit} title='Log in'/>
                </View>
            )
        }}
    </Formik>
}