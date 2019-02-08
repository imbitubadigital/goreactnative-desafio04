import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/main';
import Details from './pages/details';
import Cart from './pages/cart';

import { colors } from './styles';

const Routes = createAppContainer(
  createSwitchNavigator({
    User: createBottomTabNavigator(
      {
        Home: {
          screen: createStackNavigator(
            {
              Main,
              Details,
            },
            {
              headerLayoutPreset: 'center',
              defaultNavigationOptions: {
                headerStyle: {
                  backgroundColor: colors.white,
                },
                headerTintColor: colors.danger,
              },
            },
          ),
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
          },
        },
        Cart: {
          screen: createStackNavigator(
            {
              Cart,
            },
            {
              headerLayoutPreset: 'center',
              defaultNavigationOptions: {
                headerStyle: {
                  backgroundColor: colors.white,
                },
                headerTintColor: colors.danger,
              },
            },
          ),
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="shopping-cart" size={24} color={tintColor} />
            ),
          },
        },
      },
      {
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.danger,
          inactiveTintColor: colors.regular,
          style: {
            backgroundColor: colors.white,
          },
        },
      },
    ),
  }),
);

export default Routes;
