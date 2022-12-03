import React from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";

import LifeStatus from "../../Components/Common/LifeStatus";
import DefaultButton from "../../Components/Common/DefaultButton";

export default Start = () => {

  const handleNavAppExplanation = () => {
    console.log("Testando o clique")
  }

  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{alignItems: "center"}}>
          <Image
            style={styles.logo}
            source={require("../../assets/icons/logo3.png")}
          />
          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível.  
          </Text>

          <LifeStatus />
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
          
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  }
})