import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface TypeProps {
  type: "up" | "down";
}

interface ButtonProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 49%;
  border: 1.5px solid ${({ theme }) => theme.colors.text}40;
  border-radius: 5px;
  padding: 18px;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: none;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `}
`;

export const Icon = styled(Feather)<TypeProps>`
  color: ${({ type, theme }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
  font-size: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: 24px;

  color: ${({ theme }) => theme.colors.title};
`;
