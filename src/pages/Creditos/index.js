import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";


const Creditos = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Adicione Créditos</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerCredits}>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>R$ 10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>R$ 20</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>R$ 50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>R$ 100</Text>
        </TouchableOpacity>
      </Animatable.View>

      <View style={styles.containerFooter}>
        <Text style={styles.footerText}>Selecione um valor ou insira manualmente</Text>
      </View>
    </View>
  );
};

export default Creditos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2838",
    alignItems: "center",
    justifyContent: "center",
  },
  containerHeader: {
    marginBottom: 50,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  containerCredits: {
    alignItems: "center",
  },
  buttonBuy: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonBuyText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerFooter: {
    position: "absolute",
    bottom: 20,
  },
  footerText: {
    color: "#c0c0c0",
    fontSize: 12,
    textAlign: "center",
  },
});