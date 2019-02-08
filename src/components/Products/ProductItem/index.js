import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const ProductItem = ({ prod, linkUrl }) => (
  <TouchableOpacity style={styles.product} onPress={linkUrl}>
    <Image style={styles.image} source={{ uri: prod.image }} />
    <View style={styles.info}>
      <Text style={styles.title}>{prod.name}</Text>
      <Text style={styles.brand}>{prod.brand}</Text>
      <Text style={styles.price}>{`R$ ${prod.priceFormat}`}</Text>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  prod: PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  linkUrl: PropTypes.func.isRequired,
};

export default ProductItem;
