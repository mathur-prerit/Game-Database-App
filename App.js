import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text, View, Button, TextInput, ScrollView,FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './src/assests/styling/master-style';
import * Font as './2243  '
import {AppLoading} from 'expo'



const getFonts=()=>{
  return Font.loadAsync({
    font-name=require(path),

  })
}

export default function App() {
  const [name, setName] = useState('Prerit');

  if(name){
    return <ada></ada>
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
        <TextInput keyboardType='numeric' multiline placeholder="Your Name" onChangeText={(val) => {
          setName(val);
        }}/>
        <Button title="lets see games" onPress={() => {
          Alert.alert(`Welcome ${name}`);
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
      <TouchableOpacity onPress={()=>pressHandlerfunc(id)}>
      <Text>fdfd</Text>
      </TouchableOpacity>
    )/>
  );
}
