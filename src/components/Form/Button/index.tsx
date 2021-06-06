import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...res }: Props) {
  return (
    <Container activeOpacity={0.7} {...res}>
      <Title>{title}</Title>
    </Container>
  );
}
