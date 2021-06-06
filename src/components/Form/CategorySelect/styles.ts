import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface StyleProps {
  color: string;
}

export const Container = styled(TouchableOpacity)<StyleProps>`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ color }) => color}20;
  padding: 18px 16px;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Category = styled.Text<StyleProps>`
  color: ${({ theme, color }) =>
    color !== theme.colors.text ? theme.colors.title : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-left: 8px;
`;
export const Icon = styled(Feather)``;
