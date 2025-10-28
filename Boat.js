import React from 'react-native';
import {View, Text, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, picture, icon_name}) => {
  return (
    <View>
      <Text style={{fontFamily:'Roboto', textTransform:'uppercase', fontSize: 20, fontWeight: 'bold', color: 'grey'}}>
        <FontAwesome6 name={icon_name} size={20} color="grey" />
        {name}
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
        {description}
      </Text>
      <Image source={picture} style={{width: 400, height: 500, marginBottom: 30}} />
    </View>
  );
};

export default Boat;