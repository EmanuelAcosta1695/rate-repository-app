import { Text, FlatList } from "react-native"
import repositories from "../data/repositories.js"  // Fix the typo here
import RepositoryItem from "./RepositoryItem.jsx"

const RepositoryList = () => {
    return (
        // data={repositories} = la data que tiene que renderizar
        // renderItem={} = metodo de como tiene que renderizar cada item
        <FlatList data={repositories} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
               <RepositoryItem {...repo} />
            )}
        />
    )
}

export default RepositoryList