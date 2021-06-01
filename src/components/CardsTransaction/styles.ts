import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface PropsTypes {
  type: "positive" | "negative";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 17px 24px;
  margin-bottom: 16px;
  border-radius: 5px;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amounted = styled.Text<PropsTypes>`
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  margin-top: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypeTransaction = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TransactionType = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
