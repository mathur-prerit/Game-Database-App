import { createStackNavigator } from '@react-navigation/stack';

const screens = {
  Home: {
    screen: '///////////component',
    navigationOptions: {
      title: 'Gamezone',
      headerStyle: { backgroundColor: 'red' },
    },
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
