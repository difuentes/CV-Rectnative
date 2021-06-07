import React,{useEffect} from 'react';
import {Text,View,Button} from 'react-native';

import { styles, colores } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

//iconos
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';



export const Contacto = () => {

    const navigator = useNavigation(); 

    return (
       
            <View  style={{marginHorizontal:20,marginTop:10}}>
                <Text style={{fontSize:40,marginTop:70,fontWeight:'bold',alignItems:'center',textAlign:'center',color:colores.primary}}>Contacto</Text>

                <View style={{alignItems:'center',marginTop:5}}>
                    <Text style={{marginBottom:10}}><Icon name="call" size={40} color='#ffd70a'/></Text>
                    <Text style={{fontSize:30,fontWeight:'bold',color:colores.secondary}}>Telefono</Text>
                    <Text style={{fontSize:20,marginTop:15}}>+569 36386995</Text>
                </View>

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

                <View style={{alignItems:'center',marginTop:30}}>
                     <Text style={{marginBottom:10}} ><Icon name="mail" size={40} color='#ffd70a'/></Text> 
                    <Text style={{fontSize:30,fontWeight:'bold',color:colores.secondary}}>Correo</Text>
                    <Text style={{fontSize:20,marginTop:15}}>Fuentesdiego054@gmail.com</Text>
                </View>

                
              
            </View>
            
       
    )
}


export default Contacto;