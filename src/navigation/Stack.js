import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import NavStack from '../components/NavStack'
const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator 
            initialRouteName="AScreen"
            screenOptions={{ headerShown: true }}>
        <Stack.Screen name="AScreen"
                      options={{ title: 'Home Screen' }}
                    //   component={ScreenA}
                    >
            {props => (
                <NavStack {...props} forward="BScreen">
                    <ScreenA />
                </NavStack>
            
            )}       
        </Stack.Screen>
        <Stack.Screen name="BScreen">
            {props => (
                    <NavStack {...props} forward="CScreen" backward>
                        <ScreenB />
                    </NavStack>
                )}       
        </Stack.Screen>
        <Stack.Screen name="CScreen">
            {props => (
                <NavStack {...props} forward="CScreen" backward>
                    <ScreenC {...props} />
                </NavStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)

//Quem tem a propriedade navigation é esse componente
//Observar as formas de passar os props para os filhos 