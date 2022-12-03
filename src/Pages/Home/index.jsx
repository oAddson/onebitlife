import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";

export default Home = () => {
  const navigation = useNavigation();

  const handleNavExplanation = () => {
    navigation.navigate("AppExplanation")
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: "center"}}>
          <Text style={styles.dailyChecks}> ❤️ 20 dias - ✔️ 80 checks </Text>
          <LifeStatus />
        </View>
        <Text 
          style={styles.explanationText}
          onPress={() => {
            handleNavExplanation();
          }}
        >
          Ver explicação novamente
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyChecks: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40
  },
  explanationText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25
  }
})