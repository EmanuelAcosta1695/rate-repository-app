import {Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    }
})

// el children va a ser el texto que envuelve este componente
// restOfProps -> recuperamos el resto de las props para que se pasen al componenete
//                Asi podemos pasarle props que no estamos controlando aqui
// style -> para que desde fuera se pueda estilar tambien
export default function StyledText ({children, color, fontSize, fontWeight, style, ...restOfProps}) {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
    ]

    return (
        // la prop de style puede recibir tanto objetos como arrays
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}