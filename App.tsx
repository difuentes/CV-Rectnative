import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuTabBottom } from './src/navigator/MenuTabBottom';


export const App = () =>{

  return(
    <NavigationContainer>
       
          {/*<StackNavigator/>*/}
          {/*<<MenuLateralBasico/>*/}
          <MenuLateral/>
          
    </NavigationContainer>
  
  )

}
 
export default App;