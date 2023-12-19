import { View, Text, StyleSheet, Image } from "react-native"
import StyledText from "./StyledStyledText"
import RepositoryStats from "./RepositoryStats"

// Todos los View en RN tiene un 'display: flex' por defecto
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
        <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
        <StyledText>Description: {props.description}</StyledText>
        <StyledText style={styles.language}>Language: {props.language}</StyledText>
        <RepositoryStats {...props}/>
    </View>
)

/* 
This is a shorthand syntax in React for implicitly returning the JSX within the parentheses. 
It's commonly used for stateless functional components or arrow functions that have a single expression.
*/

// This is the correct way to place it.
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start', // I move the element and it occupies only that position.
        marginVertical: 4,
        borderRadius: 4, // to show "borderRadius" it's necessary "overflow: 'hidden'"
        overflow: 'hidden'
    },
    image: { // It is necessary to display the image
        width: 48,
        height: 48,
        borderRadius: 4
      }
})

export default RepositoryItem