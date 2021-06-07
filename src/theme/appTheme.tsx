import { StyleSheet } from "react-native";

export const colores = {
    primary: '#ffd70a',
    secondary:'black'
}

export const  styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
        marginTop:80
        
    },
    title: {
        fontSize :30,
        textAlign:"center",
        marginBottom:10,
        marginTop:5,
        color:'black',
        fontWeight:'bold'
    },
    buttonPurple:{
        backgroundColor:'#ffd70a',
        width:100,
        height:100,
        color:'#fff',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        marginTop:20

    },
    subtitle:{
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center',
        color:'black',
        marginBottom:10,
        marginTop:10
    },
    avatar:{
        width:180,
        height:180,
        borderRadius:100
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20
    },
    h1Menu:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
        marginTop:10  
    },
    containerMenu:{  
       
        marginHorizontal:65,
        marginVertical:30
    },
    menuBoton:{
        
    },
    subtitleMenu:{
        justifyContent:'center',
        marginBottom:10,
        marginTop:10,
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
    

});