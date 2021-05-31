import React from 'react'
import {Button, Text,View} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
interface Props  extends StackScreenProps<any,any>{
    id: number;
    nombre: string;
}

export const PaginaThree= ({navigation}:Props) => {
    return (
       
            <View>
                <Text style={styles.title} >Pagina Three</Text>
                <Button title="volver" onPress={()=> navigation.pop()}/>
                <Button title="ir a home" onPress={()=> navigation.popToTop()}/>
            </View>
            
       
    )
}


export default PaginaThree;