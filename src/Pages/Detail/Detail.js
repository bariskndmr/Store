import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Styles from './Detail.style';
import Config from 'react-native-config';

import useFetch from '../../Hooks/useFetch/useFetch';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';

const Detail = ({route}) => {
  const id = route.params;
  const {loading, data, error} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView style={Styles.container}>
      <Image style={Styles.image} source={{uri: data.image}} />
      <View style={Styles.bodyContainer}>
        <Text style={Styles.title}>{data.title}</Text>
        <Text style={Styles.description}>{data.description}</Text>
        <Text style={Styles.price}>{data.price} ₺</Text>
      </View>
    </ScrollView>
  );
};

export default Detail;
