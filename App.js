import React, {useState, useEffect} from 'react';
import { FlatList, Alert, TouchableOpacity, StatusBar, Image, StyleSheet, Text, TextInput, View} from 'react-native';

let originalData = [];

const App = () => {
  const [mydata, setMydata] = useState([]);

  const myurl = "https://onlinecardappwebservice-kb7a.onrender.com/allcomics"
  
  useEffect(() => {
    fetch(myurl)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if(originalData.length<1) {
          setMydata(myJson);
          originalData = myJson;
        }
      })
  }, []);

  const FilterData = (text) => {
    if(text!='') {
      let myFilteredData = originalData.filter((item)=>
        item.comic_name.includes(text));
      setMydata(myFilteredData);
    }
    else {
      setMydata(originalData);
    }
  }

  const renderItem = ({item, index}) => {
    return (
    
    <TouchableOpacity onPress={() => Alert.alert('You selected '+item.comic_name)}>
    <View style={styles.row}>
    <Text style={styles.title}>{item.comic_name}
    </Text>

    <Image source={{uri: item.comic_pic}} style={styles.image} />
    </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.view}>
      <StatusBar/>
      <Text style={styles.text}>Search:</Text>
      <TextInput style={{borderWidth:3, marginBottom: 15}} onChangeText={(text)=>{FilterData(text)}} />
      <Text style={styles.header}>Comics</Text>
      <FlatList data={mydata} renderItem={renderItem} style={{backgroundColor: 'yellow'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  view: {
    flex: 1,
    marginTop: 20,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1
    
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 25
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    margin: 10,
    fontSize: 16
  },
  image: {
    width: 130, 
    height: 170, 
    resizeMode: 'contain', 
    margin: 5 
  }
});

export default App;