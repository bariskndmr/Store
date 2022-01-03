import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';

import {Formik} from 'formik';

import Styles from './Login.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Login = ({navigation}) => {
  const handleLogin = values => {
    if (values.username === 'Barış' && values.password === '12345') {
      navigation.navigate('ProductsPage');
    } else {
      return console.log('hatalı giriş');
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          style={Styles.image}
          source={require('../../assets/Images/basket.png')}
          onSubmit={handleLogin}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={Styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı ismi giriniz..."
              onChange={handleChange('username')}
              value={values.username}
            />
            <Input
              placeholder="Şifre giriniz..."
              onChange={handleChange('password')}
              value={values.password}
            />
            <Button title="Giriş Yap" onType={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
