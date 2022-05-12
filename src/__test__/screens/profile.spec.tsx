import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

describe('Profile Screen', () => {
  it('Verify if show correctly user input name placeholder', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName).toBeTruthy();
  });

  it('check if user data has been loaded', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Mateus');
    expect(inputSurname.props.value).toEqual('Cazuza');
  });

  it('check if title render correctly', () => {
    const { getByTestId } = render(<Profile />);

    const textProfile = getByTestId('title-profile');

    expect(textProfile.props.children).toContain('Profile');
  });
});
