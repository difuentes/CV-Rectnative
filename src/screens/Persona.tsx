import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

/* Forma incorrecta
interface RouterParams {
    id: number,
    nombre: string,
    hobbie: []
}
*/

interface Props extends StackScreenProps<RootStackParams, 'Persona'> { };

export const Persona = ({ route, navigation }: Props) => {

    const params = route.params ;

    useEffect(() => {
        navigation.setOptions({
            title: params.hobbie
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text>Hobbie</Text>
            <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
        </View>


    )
}

export default Persona;