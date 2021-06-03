import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import MisRedes from '../screens/MisRedes';
import { Text, useWindowDimensions, View,Image,TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';



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
      <Drawer.Screen name="StackNavigator"   component={StackNavigator} />
      <Drawer.Screen name="MisRedes"  component={MisRedes} />
    </Drawer.Navigator>
  );
}

const MenuInterno =({navigation}: DrawerContentComponentProps<DrawerContentOptions>)=>{

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
 
            <TouchableOpacity onPress={()=> navigation.navigate('Habilidades')}>
              <Text  style={styles.subtitleMenu}>Habilidades</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Persona')} >
              <Text style={styles.subtitleMenu}>Hobbies</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=> navigation.navigate('Experiencia')}>
              <Text style={styles.subtitleMenu}>Experiencia</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Educacion')} style={styles.menuBoton}>
              <Text style={styles.subtitleMenu}>Educacion</Text>
            </TouchableOpacity>

            
         </View>

    </DrawerContentScrollView>
  );
}