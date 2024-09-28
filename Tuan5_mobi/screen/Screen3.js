import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen3 = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Logic xử lý đăng nhập
    console.log("Email:", email);
    console.log("Password:", password);
    // Điều hướng tới màn hình tiếp theo hoặc logic đăng nhập ở đây
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Bạn có thể thay thế ảnh ở đây bằng ảnh khác */}
        <Image
          source={require("../DATA/Container 17.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Welcome!</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            {/* Bạn có thể sử dụng icon thích hợp ở đây */}
            <Text>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Screen4")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: "35%",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -30,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  loginButton: {
    backgroundColor: "#00c3ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Screen3;
