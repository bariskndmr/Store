import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';

import Styles from './Login.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Login = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          style={Styles.image}
          source={require('../../assets/Images/basket.png')}
        />
      </View>
      <View style={Styles.bodyContainer}>
        <Input placeholder="Kullanıcı ismi giriniz..." />
        <Input placeholder="Şifre giriniz..." />
        <Button title="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
