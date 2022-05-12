import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  border-radius: 5px;
  padding: 18px 16px 17px;

  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 8px;

  ${({ active, theme }) =>
    active && css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
    `}
`;
