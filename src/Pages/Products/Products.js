import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import ProductCard from '../../Components/ProductCard';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

import useFetch from '../../Hooks/useFetch/useFetch';

import Config from 'react-native-config';

const Products = () => {
  const {loading, error, data} = useFetch(Config.API_URL);

  const renderProducts = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProducts} />
    </SafeAreaView>
  );
};

export default Products;
