import React, {useState, useEffect} from 'react';
import {StatusBar, Button, TouchableOpacity, FlatList, StyleSheet, Text, View, Image, TextInput} from 'react-native';

let originalData = [];

const Home = ({navigation}) => {
   const [myData, setMyData] = useState([]);
  
  //please set your allcomics endpoint url here using your own web service url
  const myurl = "https://onlinecardappwebservice-kb7a.onrender.com/allcomics"
  
  useEffect(()=>{
  fetch(myurl)
  .then((response)=>{
    return response.json();
  })
  .then((myJson)=>{
        setMyData(myJson);
        originalData=myJson;
  })},[]);

  const FilterData = (text) => {
    if(text!='') {
      let myFilteredData = originalData.filter((item) => 
        //1D - Use of toLowerCase
        item.comic_name.toLowerCase().includes(text.toLowerCase()));
      setMyData(myFilteredData);
    }
    else {
      setMyData(originalData);
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Edit",{id:item.id, name:item.comic_name, pic:item.comic_pic});
      }}>
    <View style={{flexDirection:"row", alignItems:"center",borderWidth:1}}>
    <View style={{flex:1}}><Text style={{fontWeight:"bold", margin:10}}>{item.comic_name}</Text></View>
    <View style={{flex:1}}><Image source={{uri:item.comic_pic}} style={{width:150,height:200, margin:10}}></Image></View>
    </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={{flex:1}}>
      <StatusBar translucent={false}/>
      <Text style={{fontWeight:"bold"}}>Search:</Text>
      <TextInput style={{borderWidth:1, margin:10}} onChangeText={(text)=>{FilterData(text)}}/>
        <Button title='Add Comic' onPress={()=>{navigation.navigate("Add")}}/>
      <FlatList style={{margin:10}} data={myData} renderItem={renderItem} />
    </View>
  );
};

export default Home;