import  React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

//Paginas

import { Educacion } from '../screens/Educacion';
import { Experiencia } from '../screens/Experiencia';
import { PaginaOne } from '../screens/PaginaOne';
import { Persona } from '../screens/Persona';
import Habilidades from '../screens/Habilidades';


export type RootStackParams = {
  PaginaOne:undefined,
  PaginaTwo:undefined,
  PaginaThree:undefined,
  Persona: {id:number,hobbie:string}
  Habilidades:{id:number,habilidades:string}
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator= ()=> {
  return (
   
      <Stack.Navigator  
        // initialRouteName="PaginaOne"  //cambiar navegacion inicial

        screenOptions={{
          //headerShown:false,
          headerStyle:{
            elevation:0,
            shadowColor:'transparent',
            backgroundColor:'#ffd70a',
            
          },
          cardStyle:{
            backgroundColor: 'white',
          }
        }}
      >
        <Stack.Screen name="PaginaOne" options={{title:"Curriculum vitae",headerTintColor:'white'}} component={PaginaOne} />
        <Stack.Screen name="Experiencia" options={{title:"Two",headerTintColor:'white'}} component={Experiencia} />
        <Stack.Screen name="Educacion" options={{title:"Three",headerTintColor:'white'}} component={Educacion} />
        <Stack.Screen name="Persona" options={{title:"DiFuentes",headerTintColor:'white'}} component={Persona} />
        <Stack.Screen name="Habilidades" options={{title:"Habilidades",headerTintColor:'white'}} component={Habilidades} />
      
      </Stack.Navigator>
    
  );
}