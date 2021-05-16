import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'

export default props => (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <Tab />
            {/* <Stack /> */}
        </NavigationContainer>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})