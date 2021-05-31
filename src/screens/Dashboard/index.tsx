import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, MiniTitle } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <MiniTitle>Dashboard</MiniTitle>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
