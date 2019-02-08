import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class CartItem extends Component {
  static propTypes = {
    cartItem: PropTypes.shape({
      qtd: PropTypes.number,
      product: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      }).isRequired,
    }).isRequired,
    removeCard: PropTypes.func.isRequired,
    setQtdCard: PropTypes.func.isRequired,
    addOneItem: PropTypes.func.isRequired,
    removeOneItem: PropTypes.func.isRequired,
  };

  itemRemove = (id) => {
    const { removeCard } = this.props;
    removeCard(id);
  }

  render() {
    const {
      cartItem, setQtdCard, addOneItem, removeOneItem,
    } = this.props;


    return (
      <View style={styles.container}>
        <View style={styles.datailProduct}>
          <Image style={styles.image} source={{ uri: cartItem.product.image }} />
          <View style={styles.info}>
            <Text style={styles.title}>{cartItem.product.name}</Text>
            <Text style={styles.brand}>{cartItem.product.brand}</Text>
            <Text style={styles.price}>{`R$ ${(cartItem.product.priceFormat)}`}</Text>
          </View>
        </View>
        <View style={styles.infoAction}>
          <View style={styles.boxQtd}>
            <TouchableOpacity
              style={styles.btQtd}
              onPress={() => removeOneItem(cartItem.product.id)}
            >
              <Icon name="minus" size={13} color="#fff" />
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              value={String(cartItem.qtd)}
              style={styles.input}
              placeholderTextColor="#666"
              underlineColorAndroid="transparent"
              onChangeText={qtd => setQtdCard(cartItem.product.id, qtd)}
            />
            <TouchableOpacity
              style={styles.btQtd}
              onPress={() => addOneItem(cartItem.product.id)}
            >
              <Icon name="plus" size={13} color="#fff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.del} onPress={() => this.itemRemove(cartItem.product.id)}>
            <Icon name="times" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);
