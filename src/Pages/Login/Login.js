import React from 'react';
import {Alert, Image, SafeAreaView, View} from 'react-native';

import Config from 'react-native-config';
import {Formik} from 'formik';

import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Styles from './Login.style';

import usePost from '../../Hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  const handleLogin = values => {
    post(Config.API_AUTH_URL + '/login', values);
  };

  if (error) {
    Alert.alert('Dükkan', 'Bir Hata Oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!');
    } else {
      navigation.navigate('ProductsPage');
    }
    console.log(data);
  }

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
              iconName="account"
            />
            <Input
              placeholder="Şifre giriniz..."
              onChange={handleChange('password')}
              value={values.password}
              iconName="key"
              isSecure
            />
            <Button
              title="Giriş Yap"
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
