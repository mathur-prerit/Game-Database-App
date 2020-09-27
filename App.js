import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text, View, Button, TextInput, ScrollView,FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './src/assests/styling/master-style';
import * Font as './2243  '
import {AppLoading} from 'expo'
import Navigator from './src/routes/drawer'



const getFonts=()=>{
  return Font.loadAsync({
    font-name=require(path),

  })
}

export default function App({navigation}) {
  const [name, setName] = useState('Prerit');

  if(name){
    return <Navigator/>
  }else{
    <AppLoading
    startAsync={getFonts}
    onFinish={()=>setName('23322')}/>
  }



  return (
    <TouchableWithoutFeedback onPress={()=>keyboard.dismiss()}
    <View style={styles.container}>
      <StatusBar style="auto" />
  <Text>Welcome {name} to Game DB</Text>
      <View>
  <Text>{navigation.getparam('title')}</Text>
        <TextInput keyboardType='numeric' multiline placeholder="Your Name" onChangeText={(val) => {
          setName(val);
        }}/>
        <Button title="lets see games" onPress={() => {
          Alert.alert(`Welcome ${name}`);
          navigation.navigate('Details') /*or*/ navigation.push('Details')
          navigation.goBack();
        }}/>
      </View>
    </View>
    <ScrollView>
      <View>
        data.map(item=>(
          <Text></Text>
        ))
      </View>
    </ScrollView>

    <FlatList 
    numColumns={2}
    keyExtractor={(item)=>item.id}
    data={people} renderItem=({item})=>(
      <TouchableOpacity onPress={()=>navigator.navigate('Details',item)}>
      <Text>fdfd</Text>
      </TouchableOpacity>
    )/>
  );
}
