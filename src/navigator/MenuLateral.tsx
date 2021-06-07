import React,{useEffect} from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';


import { Text, useWindowDimensions, View,Image,TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './MenuTabBottom';

import Icon from 'react-native-vector-icons/Ionicons';

import Educacion from '../screens/Educacion';
import Experiencia from '../screens/Experiencia';
import Habilidades from '../screens/Habilidades';
import MisRedes from '../screens/MisRedes';
import Persona from '../screens/Persona';


const Drawer = createDrawerNavigator();

export const MenuLateral=()=> {

  
    
     //Configuracion tamaño pantalla

     const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator  
     drawerContent={(props)=> <MenuInterno{...props}/>}
     drawerType={width >= 768 ?'permanent':'front'} 
     drawerStyle={{backgroundColor:'#ffd70a'}}
     >
      <Drawer.Screen name="MenuTabBotton"   component={Tabs} />
      <Drawer.Screen name="Habilidades" component={Habilidades}/>
      <Drawer.Screen name="Persona" component={Persona}/>
      <Drawer.Screen name="Experiencia" component={Experiencia}/>
      <Drawer.Screen name="MisRedes"  component={MisRedes} />
    </Drawer.Navigator>
  );
}

const MenuInterno =({navigation}: DrawerContentComponentProps<DrawerContentOptions>)=>{

  //console.log(navigation.navigate);

  return (
    <DrawerContentScrollView>
      {/*Avatar*/}
        <View style={styles.avatarContainer}>
            <Image source={{
              uri: 'https://media-exp1.licdn.com/dms/image/C5603AQH8y-IRbk5hFw/profile-displayphoto-shrink_800_800/0/1517825840228?e=1628121600&v=beta&t=0zn5evjbkkfFc7Zk9qIdefXSSZi1SthbPDk1zQoGRbA'
            }}
            style={styles.avatar}
            />
            <Text style={styles.h1Menu}>DiFuentes</Text>
        </View>

        {/*Opciones de menu*/}
         <View style={styles.containerMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Habilidades')}>
              
              <Text  style={styles.subtitleMenu}><Icon name="star" color="white"size={15} /> Habilidades</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('Persona')} >
              <Text style={styles.subtitleMenu}><Icon name="rocket" color="white"size={15} />  Hobbies</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Experiencia')}>
              <Text style={styles.subtitleMenu}><Icon name="desktop" color="white"size={15} /> Experiencia</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Educacion')} style={styles.menuBoton}>
              <Text style={styles.subtitleMenu}><Icon name="book" color="white"size={15} /> Educacion</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('MisRedes')} style={styles.menuBoton}>
              <Text style={styles.subtitleMenu}><Icon name="logo-facebook" color="white"size={15} /> Mis Redes</Text>
            </TouchableOpacity>
         </View>

    </DrawerContentScrollView>
  );
}