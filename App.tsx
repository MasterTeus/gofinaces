import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.loaded} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#5636D3" />
      <Register />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loaded: {
    flex: 1,
    backgroundColor: "#5636D3",
  },
});
