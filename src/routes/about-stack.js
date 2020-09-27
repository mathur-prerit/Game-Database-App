import { createStackNavigator } from '@react-navigation/stack';

const screens = {
  About: {
    screen: '///////////component',
    navigationOptions: {
      title: 'about',
      headerStyle: { backgroundColor: 'red' },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'green' },
  },
});

export default AboutStack;
