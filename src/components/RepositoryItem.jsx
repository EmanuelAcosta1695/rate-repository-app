import { View, Text, StyleSheet, Image } from "react-native"
import StyledText from "./StyledStyledText"
import RepositoryStats from "./RepositoryStats"

// With the property 'flex:1' you can adjust one view to another
// With the flex property we tell this to take up all the space and do a line break in case it doesn't have enough space.
const RepositoryItemHeader = (ownerAvatarUrl, fullName, description, language) => (
    <View style={{ flexDirection:'row', paddingBottom:2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }}/>
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
) 

// Todos los View en RN tiene un 'display: flex' por defecto
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props}/>
    </View>
)

/* 
This is a shorthand syntax in React for implicitly returning the JSX within the parentheses. 
It's commonly used for stateless functional components or arrow functions that have a single expression.
*/

// This is the correct way to place it.
// paddingVertical = paddingTop + paddingBottom
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 6
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start', // I move the element and it occupies only that position.
        marginVertical: 4,
        borderRadius: 4, // to show "borderRadius" it's necessary "overflow: 'hidden'"
        overflow: 'hidden',
    },
    image: { // It is necessary to display the image
        width: 48,
        height: 48,
        borderRadius: 4
      }
})

export default RepositoryItem