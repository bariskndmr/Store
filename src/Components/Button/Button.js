import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './Button.style';

const Button = ({title, onType}) => {
  return (
    <TouchableOpacity onPress={onType} style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
