import React from 'react-native';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, picture, icon_name}) => {
  return (
    <View style={styles.boat}>
      <Text style={styles.header}>
        <FontAwesome6 name={icon_name} size={20} color="blue" />
        {name}
      </Text>
      <Text style={styles.text}>
        {description}
      </Text>
      <Image source={picture} style={styles.child} />
    </View>
  );
};

const styles = StyleSheet.create({
  boat: {
    flex: 1,
    backgroundColor: 'beige',
    marginBottom: 10,
    justifyContent: 'center',
  },
  child: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  header: {
    fontFamily:'Roboto', 
    textTransform:'uppercase', 
    fontSize: 20, 
    fontWeight: 'bold',
    fontStyle: 'italic', 
    color: 'green',
  }
});

export default Boat;