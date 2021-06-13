import React from 'react'
import { Text, View } from 'react-native'
//iconos
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';

export default function MisRedes() {
    return (
        <View  style={{marginHorizontal:20,marginTop:50}}>
                <Text style={{fontSize:40,marginTop:70,fontWeight:'bold',alignItems:'center',textAlign:'center',color:colores.primary}}>Mis Redes Sociales</Text>

                

                <View style={{alignItems:'center',marginTop:30}}>
                    <Text style={{marginBottom:10}}><Icon name="logo-linkedin" size={40} color='#ffd70a'/></Text>
                    <Text style={{fontSize:30,fontWeight:'bold',color:colores.secondary}}>Linkedin</Text>
                    <Text style={{fontSize:20,marginTop:15}}>diegoemiliofuentesgomez</Text>
                </View>

                <View style={{alignItems:'center',marginTop:30}}>
                     <Text style={{marginBottom:10}} ><Icon name="logo-github" size={40} color='#ffd70a'/></Text> 
                    <Text style={{fontSize:30,fontWeight:'bold',color:colores.secondary}}>GitHub</Text>
                    <Text style={{fontSize:20,marginTop:15}}>Difuentes</Text>
                </View>

            
            </View>
    )
}
