import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';
import { Creators as ProdActions } from '~/store/ducks/prod';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import styles from './styles';

class Details extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addCartRequest: PropTypes.func.isRequired,
    carts: PropTypes.shape({
      loading: PropTypes.bool,
      added: PropTypes.bool,
    }).isRequired,
    product: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.number,
      }),
    }).isRequired,
    prodRequest: PropTypes.func.isRequired,
  };

  static navigationOptions = () => ({
    title: 'Detalhe do Produto',
  });

  componentDidMount() {
    const { navigation, prodRequest } = this.props;
    const prodId = navigation.getParam('prodId');
    prodRequest(prodId);
  }


  addItemCard = (id) => {
    const { addCartRequest } = this.props;
    addCartRequest(id);
  };

  render() {
    const { navigation, carts, product } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {product.loading
            ? (
              <View style={styles.prodLoading}>
                <ActivityIndicator size="small" color="#666" style={styles.loading} />
              </View>
            )
            : (
              <SafeAreaView>
                <View style={styles.product}>
                  <Image style={styles.image} source={{ uri: product.data.image }} />
                  <View style={styles.info}>
                    <View style={styles.description}>
                      <Text style={styles.title}>{product.data.name}</Text>
                      <Text style={styles.brand}>{product.data.brand}</Text>
                    </View>
                    <View style={styles.priceBox}>
                      <Text style={styles.price}>{`R$ ${product.data.priceFormat}`}</Text>
                    </View>
                  </View>
                  {carts.added
                    ? (
                      <View>
                        <Text style={styles.txtSuccess}>Produto adicionado com sucesso!</Text>
                        <View style={styles.newAction}>
                          <TouchableOpacity
                            style={[styles.btnAction, styles.btnSuccess]}
                            onPress={() => navigation.navigate('Main')}
                          >
                            <Text style={styles.txtbtnAction}>Continuar comprando</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.btnAction, styles.btnDark]}
                            onPress={() => navigation.navigate('Cart')}
                          >
                            <Text style={styles.txtbtnAction}>Fechar Pedido</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )
                    : (
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.addItemCard(product.data.id)}
                      >
                        {carts.loading
                          ? <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
                          : <Text style={styles.txtBtn}>Adicionar ao Carrinho</Text>
                        }
                      </TouchableOpacity>
                    )
                  }
                </View>
              </SafeAreaView>
            )
          }
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart,
  product: state.prod,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...CartActions, ...ProdActions },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
