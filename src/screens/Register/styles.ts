import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(90)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: ${RFValue(18)}px;
`;
