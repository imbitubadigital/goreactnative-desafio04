import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  product: {
    margin: '2.5%',
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    minHeight: 100,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
  },
  image: {
    width: 83,
    height: 120,
    borderBottomWidth: 4,
    borderColor: colors.black,
  },

  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },

  brand: {
    fontSize: 11,
    color: colors.regular,
  },
  price: {
    fontSize: 16,
    color: colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
