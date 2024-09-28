import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../DATA/Container 17.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Boost Productivity</Text>
      <Text style={styles.subtitle}>Simplify tasks, boost productivity</Text>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Screen_03")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={[styles.paginationDot, styles.activePaginationDot]} />
        <View style={styles.paginationDot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: 300,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "80%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: "#00c3ff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  loginText: {
    color: "#666",
    fontSize: 16,
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: "row",
  },
  paginationDot: {
    width: 10,
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    margin: 5,
  },
  activePaginationDot: {
    backgroundColor: "#00c3ff",
  },
});

export default Screen1;
