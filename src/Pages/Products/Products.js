import React from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../../Components/ProductCard';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

import useFetch from '../../Hooks/useFetch/useFetch';

import Config from 'react-native-config';

const Products = ({navigation}) => {
  const {loading, error, data} = useFetch(Config.API_PRODUCT_URL);

  const handleSelectProduct = id => {
    navigation.navigate('DetailPage', [id]);
  };

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelectProduct(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProducts} />;
};

export default Products;
