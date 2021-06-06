import styled, { css } from "styled-components/native";
import { Platform, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface Props {
  color: string;
  isActive: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${Platform.OS === "ios"
    ? getStatusBarHeight() + RFValue(84)
    : RFValue(84)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: ${RFValue(18)}px;
`;

export const Body = styled.View`
  justify-content: space-between;
  flex: 1;
  padding: 32px;
`

export const CategoryCard = styled(TouchableOpacity)<Props>`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin: 4px 0px;
  border-radius: 5px;

  background-color: ${({ theme, color, isActive }) =>
    isActive ? color : theme.colors.shape};
`;
export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(24)}px;

  color: ${({ theme, color, isActive }) =>
    isActive ? theme.colors.shape : color};
`;
export const Label = styled.Text<Props>`
  margin-left: 8px;

  color: ${({ theme, color, isActive }) =>
    isActive ? theme.colors.shape : theme.colors.title};
`;
