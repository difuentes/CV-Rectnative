import { useNavigation } from '@react-navigation/core';
import React,{useEffect} from 'react'
import {Button, Text,View} from 'react-native'
import { styles } from '../theme/appTheme';

export const PaginaTwo = () => {

    const navigator = useNavigation(); 

    useEffect(() => {
        navigator.setOptions({
            title:"Back To Two",
            headerBackTitle:'Atras'
        })
    }, [])


    return (
       
            <View  style={styles.globalMargin}>
                <Text style={styles.title}>Pagina Two</Text>
                <Button title="Three" onPress={()=>navigator.navigate('PaginaThree') }/>
            </View>
            
       
    )
}


export default PaginaTwo;