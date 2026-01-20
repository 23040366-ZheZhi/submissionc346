import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Edit = ({navigation, route}) => {
  const[name,setName] = useState("");
  const[pic,setPic] = useState("");
  return (
    <View>
      <StatusBar/>
      <Text>Comic Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Text>Comic Image URL:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setPic(text)}/>  
      <Text> </Text>
      <Button title='Update'
      onPress={()=>{
          Alert.alert("Are you sure?",
          "",
          [
            {text: "NO", style: "cancel"},
            {text: "YES", onPress: () => {
              fetch("https://onlinecardappwebservice-kb7a.onrender.com/updatecomic/"+route.params.id,
              {
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({comic_name:name, comic_pic:pic})
              })
              .then((response) =>{
                navigation.navigate("Home");
            })}
      }])
        }
      }
      />
      <Text> </Text>
      <Button title='Delete'
      onPress={()=>{
          fetch("https://onlinecardappwebservice-kb7a.onrender.com/deletecomic/"+route.params.id,
          {
            method: "DELETE",
          })
          .then((response) =>{
            navigation.navigate("Home");
          })
        }
      }
      />
    </View>
  );
};

export default Edit;