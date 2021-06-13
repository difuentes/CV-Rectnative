import  React from 'react';
//Libreria menu Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Platform, Text } from 'react-native';
//vistas
import Contacto from '../screens/Contacto';
import { colores, styles } from '../theme/appTheme';
import MisRedes from '../screens/MisRedes';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import PaginaOne from '../screens/PaginaOne';



export const Tabs = () => {

    return Platform.OS === 'ios'
            ? <TabsIOS />
            : <TabsAndroid />
}


  const BottomTabAndroid = createMaterialBottomTabNavigator();

  const TabsAndroid = () => {
    return (
      <BottomTabAndroid.Navigator

    barStyle={{
        backgroundColor:'white'
    }}
    
    screenOptions={ ({route})=>({
        tabBarIcon:({color,focused})=>{
            let iconName : string ='';
            switch(route.name){
                case 'Contacto':
                    iconName='call'
                break;
                case 'PaginaOne':
                    iconName='home'
                break;
                case 'MisRedes':
                    iconName='chatbubbles'
                break; 
            }

            return <Icon  name={iconName} size={20} color={color}/>
        }
        })}
      
    >
        <BottomTabAndroid.Screen name="Contacto" options={{title:'Contacto' }}component={Contacto}/>
        <bottonIos.Screen  name="PaginaOne" options={{title:'Home' }}component={PaginaOne} />
        <BottomTabAndroid.Screen name="MisRedes" options={{title:'Mis Redes '}} component={MisRedes}  />
      </BottomTabAndroid.Navigator>
    );
  }


    //Botones y configuracion ios 
    const bottonIos  = createBottomTabNavigator();

    const  TabsIOS =()=> {
    return (
        <bottonIos.Navigator
            sceneContainerStyle={{
                backgroundColor:'white'
            }}
            tabBarOptions={{
                activeTintColor:'white',
                style:{
                    backgroundColor: colores.primary ,
                    borderTopColor: 'black',
                    elevation:0
                },
                labelStyle:{
                    fontSize:15,
                    fontWeight:'bold',
                }
            }}
            screenOptions={ ({route})=>({
                tabBarIcon:({color,focused,size})=>{

                    let iconName : string ='';
                    switch(route.name){
                        case 'Contacto':
                            iconName='call'
                        break;
                        case 'PaginaOne':
                            iconName='home'
                        break;
                        case 'MisRedes':
                            iconName='chatbubbles'
                        break;
                        
                    }

                    return <Icon  name={iconName} size={20} color={color}/>
                }
            })}
        >
        {/* <Tab.Screen  name="Contacto" options={{title:'Contacto', tabBarIcon:(props) => <Text style={{color:props.color}}>x</Text> }} component={Contacto} />*/}
        <bottonIos.Screen  name="Contacto" options={{title:'Contacto' }}component={Contacto} />
        <bottonIos.Screen  name="PaginaOne" options={{title:'Home' }}component={PaginaOne} />
        <bottonIos.Screen name="MisRedes" options={{title:'Mis Redes '}} component={MisRedes} />
        
        </bottonIos.Navigator>
    );
    }