import React from 'react';
import {Image, Text, View} from 'react-native';
import Styles from './Detail.style';

import useFetch from '../../Hooks/useFetch/useFetch';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';

import Config from 'react-native-config';

const Detail = ({route}) => {
  const id = route.params;
  const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri: data.image}} />
      <View style={Styles.bodyContainer}>
        <Text style={Styles.title}>{data.title}</Text>
        <Text style={Styles.description}>{data.description}</Text>
        <Text style={Styles.price}>{data.price} ₺</Text>
      </View>
    </View>
  );
};

export default Detail;

/* 
{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
*/
