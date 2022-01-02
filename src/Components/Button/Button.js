import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './Button.style';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
