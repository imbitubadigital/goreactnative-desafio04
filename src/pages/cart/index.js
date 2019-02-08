import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import CartItem from './CartItem';

import styles from './styles';

class Cart extends Component {
  static propTypes = {
    total: PropTypes.string.isRequired,
    carts: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        qtd: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  static navigationOptions = () => ({
    title: 'Carrinho',
  });

  render() {
    const { carts: { data, loading }, total } = this.props;
    return (
      <View style={styles.container}>
        {data.length === 0
          ? (
            <View style={styles.NotItens}>
              <Text style={styles.txtNotItens}>Não há itens no carrinho!</Text>
            </View>
          )
          : (
            <Fragment>
              <View style={styles.cartContainer}>
                <SafeAreaView>
                  <FlatList
                    data={data}
                    keyExtractor={item => String(item.product.id)}
                    renderItem={({ item }) => <CartItem cartItem={item} />}
                  />
                </SafeAreaView>
              </View>
              <View style={styles.total}>
                <Text style={styles.subTotal}>Subtotal</Text>
                {loading
                  ? <ActivityIndicator size="small" color="#666" style={styles.loading} />
                  : <Text style={styles.priceTotal}>{`R$ ${total}`}</Text>
                }
              </View>
            </Fragment>
          )
        }
      </View>
    );
  }
}

function subtotal(itens) {
  if (!itens) return null;
  return itens.reduce((sub, item) => sub + (item.qtd * item.product.price), 0);
}

const mapStateToProps = state => ({
  carts: state.cart,
  total: (subtotal(state.cart.data)).toFixed(2).replace('.', ','),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
