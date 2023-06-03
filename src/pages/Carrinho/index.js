import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrinho = ({ route, navigation }) => {
  const { imageArray, dinheiroArray } = route.params;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (imageArray && dinheiroArray) {
      const items = imageArray.map((image, index) => ({
        image,
        dinheiro: dinheiroArray[index]
      }));
      setCartItems(items);
    }
  }, [imageArray, dinheiroArray]);

  const deleteItem = async (index) => {
    try {
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);

      const updatedImageArray = updatedItems.map(item => item.image);
      const updatedDinheiroArray = updatedItems.map(item => item.dinheiro);

      await AsyncStorage.setItem('imageArray', JSON.stringify(updatedImageArray));
      await AsyncStorage.setItem('dinheiroArray', JSON.stringify(updatedDinheiroArray));

      setCartItems(updatedItems);
    } catch (error) {
      console.error('Erro ao deletar o item:', error);
    }
  };

  const calculateTotal = () => {
    if (cartItems.length > 0) {
      return cartItems.reduce((total, item) => total + item.dinheiro, 0);
    } else {
      return 0;
    }
  };

  return (
    <View>
      <Text style={styles.title}>Carrinho</Text>
      {cartItems.length > 0 && (
        <ScrollView horizontal contentContainerStyle={styles.container}>
          {cartItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => deleteItem(index)}
              style={styles.itemContainer}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.textMoney}>{item.dinheiro}R$</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Text style={styles.totalText}>Total: {calculateTotal()}R$</Text>
      <TouchableOpacity style={styles.btnComprar}>
        <Text style={styles.btnComprarText}>
          Comprar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carrinho;

const styles = StyleSheet.create({
  title:{
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  textMoney: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  totalText: {
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  btnComprar:{
    marginTop: 50,
    width: "80%",
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 8
  },
  btnComprarText:{
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});