import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface CardProps {
  color: string;
}

export const Container = styled.View<CardProps>`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  justify-content: space-between;

  padding: 12px 24px;

  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${({ color }) => color};

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
