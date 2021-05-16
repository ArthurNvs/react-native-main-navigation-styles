import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.forward ? 
                <Button 
                    title="Forward"
                    onPress={() => {
                        //props.navigation.navigation(props.forward, props.forwardParam || null)
                        props.navigation.push(props.forward, {
                            num: parseInt(Math.random() * 100)
                        })
                    }}
                 /> : false
            }
            {props.backward ? 
                <Button 
                    title="Backward"
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                 /> : false
            }
        </View>

        <View style={{flex: 1}}>
            {props.children}
        </View>

    </View>
)

//props.navigation.navigate -> segue adiante na navegação porém sem repetir a mesma tela (logo sem passar para frente parâmetros)
//props.navigation.push -> segue adiante na navegação podendo adicionar a mesma tela diversas vezes como em um array,
//os itens seguirão em frente podendo passar novos parâmetros 