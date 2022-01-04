import React from 'react';
import {View, TextInput} from 'react-native';
import Styles from './Input.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, value, onChange, iconName, isSecure}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={24} color="gray" />
    </View>
  );
};

export default Input;
