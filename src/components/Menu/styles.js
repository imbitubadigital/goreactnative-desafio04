import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    paddingHorizontal: metrics.basePadding / 2,
    flexDirection: 'row',
  },
  boxLoading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: metrics.basePadding / 2.5,
  },
  itemMenu: {
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2 - 4,
    marginHorizontal: metrics.basePadding / 2,
  },
  itemMenuActive: {
    borderBottomWidth: 4,
    borderColor: colors.white,
  },
  txtMenu: {
    color: colors.white,
    fontSize: 12,
  },
  txtMenuActive: {
    fontWeight: 'bold',
  },
});

export default styles;
