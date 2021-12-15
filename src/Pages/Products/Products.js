import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';

import ProductCard from '../../Components/ProductCard';

import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch/useFetch';

const Products = () => {
  const {loading, error, data} = useFetch(Config.API_URL);

  const renderProducts = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProducts} />
    </SafeAreaView>
  );
};

export default Products;
