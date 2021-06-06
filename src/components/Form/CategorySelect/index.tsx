import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Container, Category, Icon } from "./styles";

interface ButtonSelection {
  key: string;
  name: string;
  color: string;
  icon: string;
}
interface Props extends TouchableOpacityProps {
  title: string;
  buttonProps: ButtonSelection;
}

export function CategorySelect({ title, buttonProps, ...rest }: Props) {
  return (
    <Container color={buttonProps.color} {...rest}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon color={buttonProps.color} name={buttonProps.icon} size={20} />
        <Category color={buttonProps.color}>{title}</Category>
      </View>
      <Icon name="chevron-down" color="#969cb2" size={20} />
    </Container>
  );
}
