import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding / 3,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: metrics.baseRadius,
  },
  datailProduct: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 41,
    height: 60,
  },
  info: {
    marginLeft: 10,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 13,
  },

  brand: {
    fontSize: 11,
    color: colors.regular,
  },
  price: {
    fontSize: 15,
    color: colors.green,
    fontWeight: 'bold',
  },
  infoAction: {
    flexDirection: metrics.w < 400 ? 'column-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: metrics.w < 400 ? 'flex-end' : 'center',
  },
  boxQtd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.w < 400 ? 15 : 0,
    marginHorizontal: metrics.w < 400 ? 0 : 15,
  },
  btQtd: {
    backgroundColor: colors.light,
    paddingHorizontal: 6,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.regular,
    paddingHorizontal: 5,
    paddingVertical: 1,
    textAlign: 'center',
    marginHorizontal: 0,
  },

  del: {
    paddingHorizontal: 7,
    paddingVertical: 5.2,
    backgroundColor: colors.danger,
    borderRadius: 20,
  },
});

export default styles;
