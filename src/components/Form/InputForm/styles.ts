import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled(Animatable.Text).attrs({
  animation: "shake",
  duration: 400,
  easing: "ease-in-out-quart",
})`
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
  margin: 2px 8px;
`;
