import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import Menu from '~/components/Menu';
import Products from '~/components/Products';

import styles from './styles';

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Menu />
    <Products nav={navigation} />
  </View>
);

Main.navigationOptions = () => ({
  title: 'GoCommerce',
});

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
