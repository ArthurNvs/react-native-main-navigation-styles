import React from 'react'
import { Button, View } from 'react-native'
import CentralText from '../components/CentralText'

export default props => {
    
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button title='Open' 
                        onPress={() => {
                            props.navigation.openDrawer()
                            setTimeout(() => {
                                props.navigation.closeDrawer()
                                setInterval(() => {
                                    props.navigation.toggleDrawer()
                                }, 1000);
                            }, 3000)}} />

            </View>
            <View style={{flex:1}}>
                <CentralText backColor='yellow' textColor='black'>
                    D
                </CentralText>
            </View>
        </View>
    )
}