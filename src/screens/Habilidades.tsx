import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Habilidades'> { };

export const Habilidades = ({ route, navigation }: Props) => {

     const params = route.params ; 
    
    useEffect(() => {
       
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Habilidades</Text>
            <Text style={{textAlign:'center'}}><Icon name="star" color="#ffd70a"size={50} /></Text>
            
            <View style={{ flexDirection: 'row',marginLeft:5 }}>
               

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#00f6cb'
                    }}
                    
                >
                    <Icon 
                        name="logo-react"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Ract</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#61f205'
                    }}
                    
                >
                    <Icon 
                        name="logo-javascript"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>JavaScript</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#ffd70a'
                    }}
                    
                >
                    <Icon 
                        name="logo-react"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Rect Native</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{ flexDirection: 'row',marginLeft:5 }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#00f6cb'
                    }}
                    
                >
                    <Icon 
                        name="logo-css3"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>CSS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#61f205'
                    }}
                    
                >
                    <Icon 
                        name="logo-nodejs"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Node JS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#ffd70a'
                    }}
                    
                >
                    <Icon 
                        name="logo-html5"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>HTML</Text>
                </TouchableOpacity>
               
                
            </View>


            <View style={{ flexDirection: 'row',marginLeft:5 }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#00f6cb'
                    }}
                    
                >
                    <Icon 
                        name="server-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>SQL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#61f205'
                    }}
                    
                >
                    <Icon 
                        name="logo-firebase"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>FireBase</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#ffd70a'
                    }}
                    
                >
                    <Icon 
                        name="server-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>MongoDB</Text>
                </TouchableOpacity>
               
            </View>

            <View style={{ flexDirection: 'row',marginLeft:5 }}>
                

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#00f6cb'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Next Js</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#61f205'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>JQuery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#ffd70a'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>GIT</Text>
                </TouchableOpacity>
                
            </View>


           
            <View style={{ flexDirection: 'row',marginLeft:5 }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#00f6cb'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>PHP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#61f205'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Java</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...styles.buttonPurple,
                        backgroundColor: '#ffd70a'
                    }}
                    
                >
                    <Icon 
                        name="code-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={{color:'white'}}>Laravel</Text>
                </TouchableOpacity>
            </View>

           
        </View>

    )
}

export default Habilidades;