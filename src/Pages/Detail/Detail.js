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
