import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Alert, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Quiz from './Quiz';

const Title = ({line}) => {
  return(
    <View style={{ marginTop: 25}}>
      <Text style={{fontSize: 30}}>
        <FontAwesome6 name='gamepad' size={30}/>
        {line}</Text>
    </View>
  );
};

const App = () => {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');
  const [ans4, setAns4] = useState('');
  const [ans5, setAns5] = useState('');
  const [ans6, setAns6] = useState('');
  const [ans7, setAns7] = useState('');
  const [ans8, setAns8] = useState('');
  const [ans9, setAns9] = useState('');
  const [ans10, setAns10] = useState('');

  const handleSubmit = () => {
    let correct = 0;

    if (ans1 === '8') correct++;
    if (ans2 === '9') correct++;
    if (ans3 === '7') correct++;
    if (ans4 === '5') correct++;
    if (ans5 === '10') correct++;
    if (ans6 === '1') correct++;
    if (ans7 === '2') correct++;
    if (ans8 === '6') correct++;
    if (ans9 === '4') correct++;
    if (ans10 === '3') correct++;

    let message = '';
    if (correct === 1) {
      message = `You have ${correct} correct answer!`;
      } else {
        message = `You have ${correct} correct answers!`;
        }
    Alert.alert(message);
  };
  
  return(
    <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 20}}>
      <Title line='Game Quiz' />
      <Quiz picture={require('./img/warthunder.jpg')} setAnswer={setAns1}/>
      <Quiz picture={require('./img/snakeeater.jpeg')} setAnswer={setAns2}/>
      <Quiz picture={require('./img/skyrim.jpg')} setAnswer={setAns3}/>
      <Quiz picture={require('./img/mw2.png')} setAnswer={setAns4}/>
      <Quiz picture={require('./img/mgrr.jpeg')} setAnswer={setAns5}/>
      <Quiz picture={require('./img/darksouls1.jpeg')} setAnswer={setAns6}/>
      <Quiz picture={require('./img/darksouls.jpg')} setAnswer={setAns7}/>
      <Quiz picture={require('./img/blackops.jpeg')} setAnswer={setAns8}/>
      <Quiz picture={require('./img/bf5.jpg')} setAnswer={setAns9}/>
      <Quiz picture={require('./img/bf1.jpeg')} setAnswer={setAns10}/>
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingBottom: 100,
    paddingTop: 20,
  },
});

export default App;