import React, { useEffect } from 'react'
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button, StyleSheet,TouchableOpacity, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';


/*Stacker Screen 
    interface Props extends StackScreenProps<any,any>{
        id: number;
        nombre: string;
    }
*/
//Drawer Screen
interface Props extends DrawerScreenProps<any,any>{
    id: number;
    nombre: string;
}



export const PaginaOne = ({navigation}:Props) => {


    //Agregar Drawer a Pantalla
    useEffect(()=>{

        navigation.setOptions({
            headerLeft:() => (<Button  title="Menu" onPress={()=>navigation.toggleDrawer()} /> )
        })

    },[])


    return (
       
            <View style={styles.globalMargin} >
                <Text style={{textAlign:'center',marginVertical:20}}><Icon name="person" color="#ffd70a"size={50} /></Text>
                <Text style={styles.title}>Diego  Fuentes </Text>
               
                <Text style={styles.subtitle}>Sobre Mi</Text>
                <Text style={{textAlign:'center',marginVertical:10}}><Icon name="moon" color="#ffd70a"size={40} /></Text>
                <View style={{}}>
                    
                   
                </View>
                
            </View>
            
       
    )
}

export default PaginaOne;