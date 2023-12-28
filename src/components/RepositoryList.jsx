import { Text, FlatList } from "react-native"
// import repositories from "../data/repositories.js"  // Fix the typo here
import RepositoryItem from "./RepositoryItem.jsx"
import React, { useEffect, useState } from "react"

const RepositoryList = () => {
    const [repositories, setRepositories] = useState(null)
    

    const fetchRepositories = async () => {
        const response = await global.fetch('http://localhost:5000/api/repositories');
        const json = await response.json();
        setRepositories(json);
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories ?
        repositories.edges.map(edge => edge.node)
        : []

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