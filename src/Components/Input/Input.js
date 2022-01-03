import React from 'react';
import {View, TextInput} from 'react-native';
import Styles from './Input.style';

const Input = ({placeholder}) => {
  return (
    <View style={Styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Input;
