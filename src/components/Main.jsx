import { View, Platform } from "react-native"
import RepositoryList from "./RepositoryList.jsx"
import AppBar from "./AppBar" // React native will recognize if our device is on Android or iOS.
import { Switch, Route, Redirect } from "react-router-native"
import LoginPage from "../pages/login.jsx"


const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/sigin' exact>
                    <LoginPage/>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main