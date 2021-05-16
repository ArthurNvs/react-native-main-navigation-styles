import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
                case 'AScreen':
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                break

                case 'BScreen':
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                break

                case 'CScreen':
                    iconName = focused ? 'ios-list' : 'ios-list'
                break
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            showLabel: true,
            labelStyle: { fontSize: 14 }
    }} initialRouteName="BScreen">
        <Tab.Screen name="AScreen" component={ScreenA} options={{ title: 'A'}} />
        <Tab.Screen name="BScreen" component={ScreenB} options={{ title: 'B'}} />
        <Tab.Screen name="CScreen" component={ScreenC} options={{ title: 'C'}} />
    </Tab.Navigator>   
)
