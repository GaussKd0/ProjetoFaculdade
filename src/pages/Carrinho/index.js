import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const Carrinho = ({ route }) => {
  const { imageArray, dinheiroArray } = route.params;
  const [totalDinheiro, setTotalDinheiro] = useState(0);

  useEffect(() => {
    if (dinheiroArray) {
      const initialSum = dinheiroArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setTotalDinheiro(initialSum);
    }
  }, [dinheiroArray]);

  const handleDelete = (index) => {
    const updatedImageArray = [...imageArray];
    const updatedDinheiroArray = [...dinheiroArray];

    updatedImageArray.splice(index, 1);
    updatedDinheiroArray.splice(index, 1);

    setTotalDinheiro(updatedDinheiroArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    route.params = { imageArray: updatedImageArray, dinheiroArray: updatedDinheiroArray };
  };

  return (
    <View>
      <Text style={styles.title}>Carrinho</Text>
      {imageArray && (
        <ScrollView horizontal contentContainerStyle={styles.container}>
          {imageArray.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDelete(index)}
              style={styles.itemContainer}
            >
              <Image source={image} style={styles.image} />
              <Text style={styles.textMoney}>{dinheiroArray[index]}R$</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Text style={styles.totalText}>Total: {totalDinheiro}R$</Text>
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