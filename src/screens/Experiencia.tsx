import React from 'react'
import {Button, Text,View} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
interface Props  extends StackScreenProps<any,any>{
    id: number;
    nombre: string;
}

export const Experiencia= ({navigation}:Props) => {
    return (
       
            <View>
                <Text style={styles.title}>Experiencia</Text>
                <Button title="volver" onPress={()=> navigation.pop()}/>
                <Button title="ir a home" onPress={()=> navigation.popToTop()}/>
            </View>
            
       
    )
}


export default Experiencia;