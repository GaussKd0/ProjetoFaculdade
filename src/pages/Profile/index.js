import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import * as Animatable from "react-native-animatable";
import { CarregaPrincipal } from "../../services/CarregaDados";
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/MaterialIcons";


const Profile = () => {
    const [icon, setIcon] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();
  
    const handleInputChange = (text) => {
      setInputValue(text);
    };
  
    const handleButtonClick = () => {
      setIsInputVisible(true);
    };
  
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      const returnCarregaPrincipal = CarregaPrincipal();
      setIcon(returnCarregaPrincipal.icon);
  
      const getUserName = async () => {
        try {
          const value = await AsyncStorage.getItem('username');
          if (value !== null) {
            setUsername(value);
          }
        } catch (error) {
          console.log('Erro ao obter o nome de usuário:', error);
        }
      };
  
      getUserName();
    }, []);
  
    const editItem = async () => {
      try {
        if (inputValue !== '') {
          const value = await AsyncStorage.getItem('username');
          if (value !== null) {
            const novoValor = inputValue;
    
            await AsyncStorage.setItem('username', novoValor);
            console.log('Item editado com sucesso!');
            navigation.navigate('Principal', { onEditProfile: setUsername });
          } else {
            console.log('O item não existe no armazenamento local.');
          }
        } else {
          console.log('Nenhum valor digitado.');
        }
      } catch (error) {
        console.log('Erro ao editar o item:', error);
      }
    };
    
  
    return (
      <View>
        <Animatable.View animation="fadeInLeft" delay={200} style={styles.form}>
          <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
            <Icon name="arrow-back" size={50} style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </Animatable.View>
  
        <Animatable.View animation="fadeInUp" delay={500}>
          <TouchableOpacity>
            <Image source={icon} style={styles.image} />
          </TouchableOpacity>
  
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={styles.text}>{username}</Text>
            <TouchableOpacity onPress={handleButtonClick}>
              <Icon name="edit" size={18} style={styles.icon} />
            </TouchableOpacity>
          </View>
  
          {isInputVisible && (
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="Digite algo"
            />
          )}
  
          <TouchableOpacity onPress={editItem} style={styles.buttonConfirm}>
            <Text style={styles.buttonConfirmText}>Confirmar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  };

const styles = StyleSheet.create({
    form:{
        flexDirection: "column"
    },
    arrow:{
        paddingStart: 20,
        marginTop: 20,
        position: "absolute"
       
    },
    title: {
        alignSelf: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 25,
        marginBottom: 25
    },
    image:{
        width: 250,
        height: 250,
        borderRadius: 200,
        alignSelf: "center",
        
    },
    text:{
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold",
      
    },
    icon:{
       marginTop: 5,
       marginLeft: 5
        
    },
    input:{
        padding: 15,
        backgroundColor: "#000",
        color: "#fff",
        alignSelf: "center",
        borderRadius: 8,
        width: "80%",
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#00F0FF"
    },
    buttonConfirm:{
        backgroundColor: "#000000",
        padding: 15,
        borderRadius: 8,
        width: "45%",
        marginTop: 30,
        alignSelf: "center"
    },
    buttonConfirmText: {
        color: "#fff",
        fontSize: 18,
        fontWeight:"bold",
        textAlign: "center"
    }
})

export default Profile;