import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../components/common/Header';

const screens = {
  Home: {
    screen: '///////////component',
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <Header navigation={navigation} title={'hello'}/>,
    }),
  },
  Details: {
    screen: '/////////////////////////compjnegt',
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'green' },
  },
});

export default HomeStack;
