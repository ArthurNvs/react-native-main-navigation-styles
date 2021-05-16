import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 30 }
    }} initialRouteName="BScreen">
        <Tab.Screen name="AScreen" component={ScreenA} />
        <Tab.Screen name="BScreen" component={ScreenB} />
        <Tab.Screen name="CScreen" component={ScreenC} />
    </Tab.Navigator>   
)
