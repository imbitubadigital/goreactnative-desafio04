import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '~/store/ducks/categories';
import { Creators as ProductsActions } from '~/store/ducks/products';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Menu extends Component {
  static defaultProps = {
    catId: null,
  };

  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    productsRequest: PropTypes.func.isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
    catId: PropTypes.oneOfType([null, PropTypes.number]),
  };

  componentDidMount() {
    const { getCategoriesRequest, catId, productsRequest } = this.props;
    getCategoriesRequest();
    const category = catId || 1;
    productsRequest(category);
  }

  render() {
    const { categories, productsRequest, catId } = this.props;
    return (
      <View style={styles.container}>
        {categories.loading
          ? (
            <View style={styles.boxLoading}>
              <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
            </View>
          )
          : (
            <ScrollView horizontal>
              {categories.data.map(m => (
                <TouchableOpacity
                  style={[m.id === catId ? styles.itemMenuActive : '', styles.itemMenu]}
                  key={m.id}
                  onPress={() => productsRequest(m.id)}
                >
                  <Text style={[m.id === catId ? styles.txtMenuActive : '', styles.txtMenu]}>{m.title.toUpperCase()}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  catId: state.products.catId,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...CategoriesActions, ...ProductsActions },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
