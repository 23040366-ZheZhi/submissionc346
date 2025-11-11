import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Boat from './Boat';

const Title = ({line1, line2, icon_name}) => {
    return (
        <View style={styles.parent}>
            <Text style={styles.text}>
              <FontAwesome6 style={styles.text} name={icon_name} />
                {line1} - {line2}
            </Text>
        </View>
    );
};

const AllBoats = () => {
  return (
    <ScrollView style={styles.parent}>
        <Title icon_name = 'dollar' line1 = 'GetABoat' line2='For Sale' style={styles.parent}/>
      <Boat name="Sea Ray 500 Sundancer" description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.' icon_name='sailboat' picture={require('./img/sea_ray.jpg')}/>
      <Boat name="Four Winns Horizon 180" description='A sporty look and refined details truly set the Horizon 180 above all others.' icon_name='sailboat' picture={require('./img/four_winns.jpg')}/>
      <Boat name="Flipper 640 ST" description='A modern take on the classic, traditional hardtop and perfect for a family picnic.' icon_name='sailboat' picture={require('./img/flipper.jpg')}/>
      <Boat name="Princess V48" description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.' icon_name='sailboat' picture={require('./img/princess.jpg')}/>
      <StatusBar style='auto' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#69cdf5ff',
  },
  text: {
    borderWidth: 3,
    fontSize: 40,
    backgroundColor: 'steelblue',
    color: 'yellow',
  }
});

export default AllBoats;