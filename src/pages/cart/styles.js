import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  NotItens: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: metrics.basePadding,
    marginVertical: metrics.basePadding,
  },
  txtNotItens: {
    color: colors.danger,
    fontSize: 18,
  },
  cartContainer: {
    flex: 1,
    padding: metrics.basePadding,
  },
  total: {
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding * 1.1,
    alignItems: 'center',
  },
  subTotal: {
    color: colors.regular,
    fontWeight: 'bold',
    fontSize: 12,
  },
  priceTotal: {
    color: colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
