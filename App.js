import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/assests/styling/master-style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Game DB</Text>
      <StatusBar style="auto" />
    </View>
  );
}
