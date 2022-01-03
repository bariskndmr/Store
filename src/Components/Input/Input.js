import React from 'react';
import {View, TextInput} from 'react-native';
import Styles from './Input.style';

const Input = ({placeholder, value, onChange}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

export default Input;
