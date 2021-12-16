import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Styles.container}>
        <Image style={Styles.image} source={{uri: product.image}} />
        <View style={Styles.innerContainer}>
          <Text style={Styles.title}>{product.title}</Text>
          <Text style={Styles.price}>Price: {product.price}₺</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
