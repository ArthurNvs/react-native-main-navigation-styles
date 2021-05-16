import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import ScreenD from '../views/ScreenD'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="DScreen">
        <Drawer.Screen name="AScreen" component={ScreenA} />
        <Drawer.Screen name="BScreen" component={ScreenB} />
        <Drawer.Screen name="CScreen" component={ScreenC} />
        <Drawer.Screen name="DScreen" component={ScreenD} />
    </Drawer.Navigator>   
)
