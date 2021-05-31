import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{
    id: number;
    nombre: string;
}

export const PaginaOne = ({navigation}:Props) => {
    return (
       
            <View style={styles.globalMargin} >
                <Text style={styles.title}>Diego Fuentes</Text>

                <Text style={styles.subtitle}>Sobre Mi</Text>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.buttonPurple}
                        onPress={()=> navigation.navigate('Persona',{id:1,nombre:"Diego Fuentes" ,hobbie:["Programar","jugar Video Juegos"]})}
                    >
                        <Text style={{color:'#fff',fontSize:15,fontWeight:'600'}}>Hobbie</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonPurple}
                        onPress={()=> navigation.navigate('Persona',{id:2,habilidades:["ES6","React","React Native"]})}
                    >
                        <Text style={{color:'#fff',fontSize:15,fontWeight:'600'}}>Habilidades</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
       
    )
}

export default PaginaOne;