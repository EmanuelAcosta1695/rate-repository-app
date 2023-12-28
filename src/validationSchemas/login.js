import * as yup from 'yup'

// This function waits for an object with the indicated shape
export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('E-mail is required.'),
    passowrd: yup
        .string()
        .min(5, 'Too short!')
        .max(50, 'Too long!')
        .required('Password is required')

})