import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import ProductItem from './ProductItem';

import styles from './styles';

const Products = ({ nav, listProducts: { data: { products }, loading } }) => (
  <View style={styles.container}>
    {loading
      ? (
        <View style={styles.prodLoading}>
          <ActivityIndicator size="small" color="#666" style={styles.loading} />
        </View>
      )
      : (
        <SafeAreaView>
          <FlatList
            data={products}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            renderItem={({ item }) => (
              <ProductItem prod={item} linkUrl={() => nav.navigate('Details', { prodId: item.id })} />
            )}
          />
        </SafeAreaView>
      )
    }
  </View>
);

Products.propTypes = {
  nav: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  listProducts: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ listProducts: state.products });

export default connect(mapStateToProps)(Products);
