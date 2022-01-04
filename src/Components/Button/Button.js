import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Styles from './Button.style';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={Styles.container}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={Styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
