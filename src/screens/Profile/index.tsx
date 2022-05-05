import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

export function Profile() {
  return (
    <View>
      <Text testID='title-profile'>Profile</Text>

      <TextInput
        testID='input-name'
        placeholder='Nome'
        autoCorrect={false}
        value='Mateus'
      />

      <TextInput
        testID='input-surname'
        placeholder='Sobrenome'
        value='Cazuza'
      />

      <Button title='Salvar' onPress={() => {}} />
    </View>
  );
}
