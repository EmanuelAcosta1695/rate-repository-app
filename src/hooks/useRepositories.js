import { useEffect, useState } from "react"

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)
    
    const fetchRepositories = async () => {
        // globalThis -> Global Object. Indicate where 'fetch' comes from.
        const response = await globalThis.fetch('http://localhost:5000/api/repositories');
        const json = await response.json();
        setRepositories(json);
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories ?
        repositories.edges.map(edge => edge.node)
        : []

    return {repositories: repositoriesNodes};
}

export default useRepositories;