import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation

const Screen2 = () => {
  const navigation = useNavigation(); // Hook for navigation
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [users, setUsers] = useState([]); // To store user data in an array

  const handleContinue = () => {
    if (!username || !email || !password || !isChecked) {
      Alert.alert("Please fill all the fields and agree to the terms.");
    } else {
      // Add user data to the users array
      const newUser = { username, email, password };
      setUsers([...users, newUser]);

      // Navigate to Screen_03
      navigation.navigate("Screen_03", { users }); // Passing the users array to the next screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nice to see you!</Text>
      <Text style={styles.subheading}>Create your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your user name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxText}>
          I agree with <Text style={styles.link}>Terms & Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
  },
  link: {
    color: "#00c3ff",
    textDecorationLine: "underline",
  },
  continueButton: {
    backgroundColor: "#00c3ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Screen2;
