import { View } from "react-native"
import RepositoryList from "./RepositoryList.jsx"
import AppBar from "./AppBar.jsx"
import { Switch, Route, Redirect } from "react-router-native"

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/sigin' exact>
                    <Text>Working on it</Text>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main