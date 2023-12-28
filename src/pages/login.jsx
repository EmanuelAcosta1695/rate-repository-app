import React from "react";
import { Formik, useField } from 'formik'
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText"
import { loginValidationSchema } from '../validationSchemas/login.js'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontsize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props}) => {
    // field => Value of the field that we send
    // meta => Field meta information as validations
    // helpers => They are to update the field. For example, contains setValue.
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput  
                error={meta.value}
                value={field.value}
                onChangeText={value => helpers.setValue(value)} // we are changing the value field into initialValues.
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )

}

// It is no longer used
// const validate = values => {
//     const errors = {}

//     if (!values.email) {
//         errors.email = 'Email is required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address' 
//     }

//     console.log(errors)

//     return errors
// }

export default function LoginPage () {
    // Formik receives a function as children
    return <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
        {( handleSubmit ) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue
                        name='email' 
                        placeholder='E-mail' 
                    />
                    <FormikInputValue
                        name='password'     
                        placeholder='Password' 
                        secureTextEntry 
                    />
                    <Button onPress={handleSubmit} title='Log in'/>
                </View>
            )
        }}
    </Formik>
}