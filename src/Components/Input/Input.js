import React from 'react';
import {View, TextInput} from 'react-native';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Input;
