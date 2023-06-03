import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { CarregaPrincipal } from "../../services/CarregaDados";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/MaterialIcons";

const Games = (props) => {

  const [username, setUsername] = useState('');
  const [money, setMoney] = useState('');
  const [icon, setIcon] = useState('');

  const value = props.route.params.value;
  const image = props.route.params.image;

  useEffect(() => {
    const returnCarregaPrincipal = CarregaPrincipal();
    setIcon(returnCarregaPrincipal.icon);
    setMoney(returnCarregaPrincipal.money);

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

  const salvarDados = async () => {
    try {
      const imageArray = await AsyncStorage.getItem('imageArray');
      let dinheiroArray = await AsyncStorage.getItem('dinheiroArray');
      let newArray = [];
      let newDinheiroArray = [];

      if (imageArray !== null) {
        newArray = JSON.parse(imageArray);
      }

      if (dinheiroArray !== null) {
        newDinheiroArray = JSON.parse(dinheiroArray);
      }

      newArray.push(image);
      newDinheiroArray.push(value);

      await AsyncStorage.setItem('imageArray', JSON.stringify(newArray));
      await AsyncStorage.setItem('dinheiroArray', JSON.stringify(newDinheiroArray));

      navigation.navigate('Carrinho', { imageArray: newArray, dinheiroArray: newDinheiroArray }); 
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  const CarregaDados = async () => {
    try {
      const imageArray = await AsyncStorage.getItem('imageArray');
      let dinheiroArray = await AsyncStorage.getItem('dinheiroArray');
      let newArray = [];
      let newDinheiroArray = [];

      if (imageArray !== null) {
        newArray = JSON.parse(imageArray);
      }

      if (dinheiroArray !== null) {
        newDinheiroArray = JSON.parse(dinheiroArray);
      }

      await AsyncStorage.setItem('imageArray', JSON.stringify(newArray));
      await AsyncStorage.setItem('dinheiroArray', JSON.stringify(newDinheiroArray));

      navigation.navigate('Carrinho', { imageArray: newArray, dinheiroArray: newDinheiroArray }); 
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };


  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <View style={styles.form}>
          <TouchableOpacity onPress={CarregaDados}>
            <Icon style={styles.icon2} name={"shopping-cart"} color={"#FFF"} size={20} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.username}>{username}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonDollar} onPress={() => navigation.navigate("Creditos")}>
          <Text style={styles.textDollar}>{money}$</Text>
        </TouchableOpacity>
      </Animatable.View>
      

      <Animatable.View animation="fadeInUp" delay={1000} style={styles.gamesForms}>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Image source={props.route.params.image} style={styles.image} />
        <Text style={styles.description}>{props.route.params.description}</Text>
        <View>
          <TouchableOpacity style={styles.buttonBuy} onPress={salvarDados}>
            <Text style={styles.buttonBuyText}>Adicionar <Text style={styles.value}>{props.route.params.value}R$</Text></Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",   
        
    },
    form:{
        flexDirection: "column",
        
    },
    icon:{
        width: 30,
        height: 30,
        position: "absolute",
        marginTop: 15,
        marginLeft: 7,
        borderRadius: 20,
    },
    icon2:{
        position: "absolute",
        marginTop: 20,
        paddingRight: 70,
        borderRadius: 20,
        alignSelf: "flex-end",
    },
    username:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        position: "absolute",
        marginTop: 18,
        marginLeft: 40
    },
    buttonDollar:{
        alignSelf: "flex-end"
        
    },
    textDollar:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 3,
        marginTop: 18,
        marginRight: 10
        
        
    },
    textValue:{
        fontSize: 18,
        color: "#99B7F9",
        fontWeight: "bold",
        position: "absolute",
        alignSelf: "flex-end",

        marginTop:  20,
        
    },

    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
        
    },
    image:{
        height: 350,
        width: 350,
        alignSelf: "center",
        borderRadius: 8
    },
    gamesForms:{
        marginTop: 20,
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        
    },
    description:{
        fontSize: 15,
        fontWeight: "bold", 
        width: 350,
        alignSelf: "center"
    },
    value:{
        position: "absolute",
        marginTop: 10,
        marginLeft: 90,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        
    },
    buttonBuy:{
        width: "60%",
        padding: 10,
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: "#000",
        borderRadius: 8,
        
    },
    buttonBuyText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
       
    }
})

export default Games;