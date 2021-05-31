import  React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

//Paginas

import { PaginaTwo } from '../screens/PaginaTwo';
import { PaginaThree } from '../screens/PaginaThree';
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
            backgroundColor:'#6f42c1',
            
          },
          cardStyle:{
            backgroundColor: 'white',
          }
        }}
      >
        <Stack.Screen name="PaginaOne" options={{title:"Curriculum vitae",headerTintColor:'white'}} component={PaginaOne} />
        <Stack.Screen name="PaginaTwo" options={{title:"Two",headerTintColor:'white'}} component={PaginaTwo} />
        <Stack.Screen name="PaginaThree" options={{title:"Three",headerTintColor:'white'}} component={PaginaThree} />
        <Stack.Screen name="Persona" options={{title:"DiFuentes",headerTintColor:'white'}} component={Persona} />
        <Stack.Screen name="Habilidades" options={{title:"Habilidades",headerTintColor:'white'}} component={Habilidades} />
      
      </Stack.Navigator>
    
  );
}