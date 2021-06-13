import { useNavigation } from '@react-navigation/core';
import React,{useEffect} from 'react'
import {Button, Text,View} from 'react-native'
import { styles } from '../theme/appTheme';

export const Educacion = () => {

    const navigator = useNavigation(); 

   


    return (
       
            <View  style={styles.globalMargin}>
                <Text style={styles.title}>Educacion</Text>
                
            </View>
            
       
    )
}


export default Educacion;