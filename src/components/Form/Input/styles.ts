import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  border-radius: 5px;
  padding: 18px 16px 17px;

  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 8px;
`;
