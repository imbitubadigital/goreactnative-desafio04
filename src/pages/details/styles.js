import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: metrics.basePadding,
  },
  prodLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  productArea: {
    flex: 1,
    padding: metrics.basePadding,
  },
  product: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: metrics.baseRadius,
  },
  image: {
    width: 165,
    height: 240,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
  description: {
    flexBasis: '60%',
  },
  priceBox: {
    flexBasis: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },

  brand: {
    fontSize: 12,
    color: colors.regular,
  },
  price: {
    fontSize: 18,
    color: colors.green,
    fontWeight: 'bold',
  },

  txtSuccess: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: metrics.baseMargin / 2,
    textAlign: 'center',
  },
  newAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnAction: {
    padding: metrics.baseMargin / 1.5,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSuccess: {
    backgroundColor: colors.success,
  },
  btnDark: {
    backgroundColor: colors.darker,
  },
  txtbtnAction: {
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    backgroundColor: colors.green,
    padding: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    width: '100%',
  },
  txtBtn: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
