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
// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};



export const PaginaOne = ({navigation}:Props) => {


    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer()  }
                >
                    <Icon 
                        name="menu-outline"
                        color='yellow' 
                        size={ 35 }
                    />
                </TouchableOpacity>
            )
        })


    }, [])


    return (
       
            <View style={styles.globalMargin} >
                <View style={{marginTop:50}}>
                    <Text style={{textAlign:'center',marginVertical:20}}><Icon name="person" color="#ffd70a"size={50} /></Text>
                    <Text style={styles.title}>Diego  Fuentes </Text>
                
                    <Text style={styles.subtitle}>Sobre Mi</Text>
                    <Text style={{textAlign:'center',marginVertical:10}}><Icon name="moon" color="#ffd70a"size={40} /></Text>
                    <View style={{marginTop:15}}>
                        <Text style={{textAlign:'center'}}>
                            Amante de las tecnologías, busco de manera constante el crecimiento tanto personal como profesional, el cual me permita desarrollarme de la manera más óptima a la hora de afrontar y dar solución a las problemáticas que se me puedan presentar en el ambiente laboral. 
                        
                        </Text>
                    
                        <Text style={{textAlign:'center',marginTop:10}}>
                            Para ello invierto mi tiempo de manera autodidacta en aprender nuevos lenguajes de programación, mediante cursos y certificaciones, los cuales me permitan a su vez fortalecer los conocimientos ya adquiridos. 
                        </Text>
                    
                    </View>
                </View>
            </View>
            
    )
}

export default PaginaOne;