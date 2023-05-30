import React, {useEffect, useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Animatable from "react-native-animatable"
import {useNavigation} from "@react-navigation/native";
import { CarregaRegistro } from "../../services/CarregaDados";
import Icon from "react-native-vector-icons/MaterialIcons";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {} from "react"
const Registrar = () =>{

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [username, setUsername] = useState('');
    const [username2, setUsername2] = useState('');
    const [usernamePlaceHolder, setUsernamePlaceHolder] = useState('')
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPassword2, setConfirmPassword2] = useState('');
    const [confirmPasswordPlaceHolder, setConfirmPasswordPlaceHolder] = useState('');
    const [buttonRegister, setButtonRegister] = useState('');
    

    useEffect( () =>{
        const returnCarregaRegistro = CarregaRegistro()
        setTitle(returnCarregaRegistro.title)
        setIcon(returnCarregaRegistro.icon)
        setUsername(returnCarregaRegistro.username)
        setUsernamePlaceHolder(returnCarregaRegistro.usernamePlaceHolder)
        setPassword(returnCarregaRegistro.password)
        setPasswordPlaceHolder(returnCarregaRegistro.passwordPlaceHolder)
        setConfirmPassword(returnCarregaRegistro.confirmPassword);
        setConfirmPasswordPlaceHolder(returnCarregaRegistro.confirmPasswordPlaceHolder);
        setButtonRegister(returnCarregaRegistro.buttonRegister)
    }, [])

    const isValid = () => {
        return username2.trim() !== '' && password2.trim() !== '' && confirmPassword2.trim() !== '';
    };
    
    const handleLogin = () => {
        if (isValid()) {
          AsyncStorage.setItem('username', username2)
            .then(() => {
              navigation.navigate("Principal");
            })
            .catch(error => {
              Alert.alert('Erro', 'Ocorreu um erro ao salvar o nome de usuário');
            });
        } else {
          Alert.alert('Campo obrigatório', 'Preencha todos os campos');
        }
    };

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>{title}</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>
                <View>
                    <TouchableOpacity>
                        <Animatable.Image 
                            animation="flipInY"
                            source={icon} 
                            style={styles.containerImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.title}>{username}</Text>
                        <TextInput style={styles.input} placeholder={usernamePlaceHolder}
                        onChangeText={(text) => setUsername2(text)}/>
                        <Icon name="account-circle" size={20} color="#000" style={styles.icon}/>
                    </View>
                    <View>
                        <Text style={styles.title}>{password}</Text>
                        <TextInput style={styles.input} placeholder={passwordPlaceHolder} onChangeText={(text) => setPassword2(text)}/>
                        <Icon name="lock" size={20} color="#000" style={styles.icon}/>
                    </View>
                    <View>
                        <Text style={styles.title}>{confirmPassword}</Text>
                        <TextInput style={styles.input} placeholder={confirmPasswordPlaceHolder} onChangeText={(text) => setConfirmPassword2(text)}/>
                        <Icon name="lock" size={20} color="#000" style={styles.icon}/>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>{buttonRegister}</Text>
                    </TouchableOpacity>
 
                </View>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000"
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '15%',
    },
    message:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFF",
      
    },
    containerImage:{
        width: 100,
        height: 100,
        marginTop: 20,
        justifyContent: "center",
        alignSelf: "center",
       

    },
    containerForm:{
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: 35,
        paddingEnd: "5%"
    },
    title:{
        fontSize: 22,
        marginTop: 30,
        fontWeight: "bold",
        color: "#131A40"
    },
    icon:{
        position: "absolute",
        marginTop: 70
    },
    input: {
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize: 15,
        paddingStart: 20
    },
    button:{
        marginTop: 20,
        backgroundColor: "#000",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        paddingTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color:"#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
})

export default Registrar;