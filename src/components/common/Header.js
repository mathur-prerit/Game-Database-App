import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
        <View>
            <MaterialIcons name='menu' onPress={openMenu}/>
            <Text>GameZone</Text>
        </View>
  );
};

export default Header;
