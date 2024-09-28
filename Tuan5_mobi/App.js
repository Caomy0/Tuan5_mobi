import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./screen/screen1";
import Screen2 from "./screen/Screen2";
import Screen_03 from "./screen/Screen3";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen4 from "./screen/Screen4";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{ title: "Create Account" }}
          />
          <Stack.Screen name="Screen_03" component={Screen_03} />
          <Stack.Screen name="Screen4" component={Screen4} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
