// React native will recognize if our device is on Android or iOS.
// This depends of the name of the file. e.g. AppBar.ios.jsx
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

// active -> if this tap is active
// children -> the text
// to -> where have to go
const AppBarTap = ({ children, to}) => {
    const { pathname } = useLocation(); // know the view path

    const active = pathname === to // show the tab of the view where we are highlighted

    const textStyle = [
        styles.text, 
        active && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
}


const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTap to='/'>Repositories</AppBarTap>
                <AppBarTap to='/signin'>Sign In</AppBarTap>
            </ScrollView>
        </View>
    )
}

export default AppBar