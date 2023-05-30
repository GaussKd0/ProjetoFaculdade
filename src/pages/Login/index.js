import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { CarregaLogin } from "../../services/CarregaDados";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [username2, setUsername2] = useState('');
  const [usernamePlaceHolder, setUsernamePlaceHolder] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('');
  const [enter, setEnter] = useState('');
  const [register, setRegister] = useState('');

  useEffect(() => {
    const returnCarregaLogin = CarregaLogin();
    setTitle(returnCarregaLogin.title);
    setUsername(returnCarregaLogin.username);
    setUsernamePlaceHolder(returnCarregaLogin.usernamePlaceHolder);
    setPassword(returnCarregaLogin.password);
    setPasswordPlaceHolder(returnCarregaLogin.passwordPlaceHolder);
    setEnter(returnCarregaLogin.enter);
    setRegister(returnCarregaLogin.register);
  }, [])

  const navigation = useNavigation();

  const isValid = () => {
    return username2.trim() !== '' && password2.trim() !== '';
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

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>{title}</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>{username}</Text>
          <TextInput
            style={styles.input}
            placeholder={usernamePlaceHolder}
            onChangeText={(text) => setUsername2(text)}
          />
          <Icon name="account-circle" size={20} color="#000" style={styles.icon1} />
        </View>

        <View>
          <Text style={styles.title}>{password}</Text>
          <TextInput
            style={styles.input}
            placeholder={passwordPlaceHolder}
            secureTextEntry
            onChangeText={(text) => setPassword2(text)}
          />
          <Icon name="lock" size={20} color="#000" style={styles.icon1} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{enter}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Registrar")}>
          <Text style={styles.buttonRegisterText}>{register}</Text>
        </TouchableOpacity>

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
    containerForm:{
        backgroundColor: "#FFF",
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
        color: "#000"
    },
    icon1:{
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
        backgroundColor: "#000",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        paddingTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color:"#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: "center"
    },
    buttonRegisterText:{
        fontSize: 18,
        color:"#131A40"
    }
    
})

export default Login;