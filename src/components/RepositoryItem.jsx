import { View, Text, StyleSheet } from "react-native"
import StyledText from "./StyledStyledText"

// Todos los View en RN tiene un 'display: flex' por defecto
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
        <StyledText>Description: {props.description}</StyledText>
        <StyledText>Language: {props.language}</StyledText>
        <StyledText>Forks: {props.forksCount}</StyledText>
        <StyledText>Stars: {props.stargazersCount}</StyledText>
        <StyledText>Rating: {props.ratingAverage}</StyledText>
        <StyledText>Review: {props.reviewCount}</StyledText>
    </View>
)

/* 
This is a shorthand syntax in React for implicitly returning the JSX within the parentheses. 
It's commonly used for stateless functional components or arrow functions that have a single expression.
*/

// Se recomienda colocarlo aca abajo.
// Esta es la forma correcta de colocarlos.
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})

export default RepositoryItem