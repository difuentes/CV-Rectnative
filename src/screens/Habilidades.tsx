import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';



interface Props extends StackScreenProps<RootStackParams, 'Habilidades'> { };

export const Habilidades = ({ route, navigation }: Props) => {

     const params = route.params ; 
    
    useEffect(() => {
       
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text>Habilidades</Text>
            <Text style={styles.title}>  </Text>
        </View>

    )
}

export default Habilidades;