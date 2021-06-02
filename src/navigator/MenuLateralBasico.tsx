import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import MisRedes from '../screens/MisRedes';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico=()=> {
    
     //Configuracion tamaño pantalla

     const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator  drawerType={width >= 768 ?'permanent':'front'}  drawerStyle={{backgroundColor:'#6f42c1'}}>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}}  component={StackNavigator} />
      <Drawer.Screen name="MisRedes" options={{title:'Mis Redes'}} component={MisRedes} />
    </Drawer.Navigator>
  );
}