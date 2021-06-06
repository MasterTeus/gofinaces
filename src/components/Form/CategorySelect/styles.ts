import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape};
  padding: 18px 16px;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
