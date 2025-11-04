import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Quiz from './Quiz';

const Title = ({line}) => {
  return(
    <View style={{ marginTop: 25}}>
      <Text style={{fontSize: 30, font}}>
        <FontAwesome6 name='sailboat' size={30}/>
        {line}</Text>
    </View>
  );
};

const App = () => {
  return(
    <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 20}}>
      <Title line='Game Quiz' />
      <Quiz picture={require('./img/warthunder.jpg'), correctans=8}/>
      <Quiz picture={require('./img/snakeeater.jpeg'), correctans=9}/>
      <Quiz picture={require('./img/skyrim.jpg'), correctans=7}/>
      <Quiz picture={require('./img/mw2.png'), correctans=5}/>
      <Quiz picture={require('./img/mgrr.jpeg'), correctans=10}/>
      <Quiz picture={require('./img/darksouls1.jpeg'), correctans=1}/>
      <Quiz picture={require('./img/darksouls.jpg'), correctans=2}/>
      <Quiz picture={require('./img/blackops.jpeg'), correctans=6}/>
      <Quiz picture={require('./img/bf5.jpg'), correctans=4}/>
      <Quiz picture={require('./img/bf1.jpeg'), correctans=3}/>
      <View style={{ marginTop: 40, alignItems: 'center'}}>
        <Button title='Submit Answers' onPress={() => {
          const Answer == correctans
        }}/>
      </View>
    </ScrollView>
  );
};

export default App;