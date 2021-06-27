import { Platform } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 24px;
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

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1, padding: 24 },
})`
`;

export const ChartContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MonthSelect = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const SelectIcon = styled(Feather)`
  font-size: 24px;
`;

export const Month = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
