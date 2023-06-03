import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo2.png";

import * as Animatable from 'react-native-animatable'
import {useNavigation} from "@react-navigation/native"

import { carregaBemVindo } from "../../services/CarregaDados";



const BemVindo = () =>{
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [buttonText, setButtonText] = useState('');

    useEffect(() => {
       const retorno = carregaBemVindo();
       setTitle(retorno.title);
       setText(retorno.text);
       setButtonText(retorno.buttonText);

       
        
    }, [])

    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={logo} 
                style={styles.icon}
                
                />
                
            </View>

            <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} 
                style={styles.button}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",
    },
    containerLogo:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        
        
    },
    icon:{
        borderColor: "#fff",
        width: "85%",
        height: "80%",
        
        
       
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopRightRadius:25,
        borderTopLeftRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",

    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 30,
        color: "#131A40",
        alignSelf: "center"
    },
    text:{
        color: "#99B7F9",
        alignSelf: "center",
        fontSize: 18
    },
    button:{
        position:"absolute",
        backgroundColor: "#000",
        borderRadius: 50,
        paddingVertical: 10,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: "center"
    },
    buttonText:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    }
})
export default BemVindo;