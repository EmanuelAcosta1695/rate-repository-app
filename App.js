// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Main from './src/components/Main.jsx'

export default function App() {
  return (
    <Main/>
  );
}

{/* <View style={styles.container}>
<Text>Hola mundo!</Text>
<StatusBar style="auto" />
</View>
*/}


{/* Para poder hacer click en un componente y haga x cosa
<TouchableWithoutFeedback onPress={() => Alert.alert('Hemos tocado el texto!')}>
<Text>Hola mundo!</Text>
</TouchableWithoutFeedback> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
