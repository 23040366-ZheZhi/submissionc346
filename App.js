import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Text, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Boat from './Boat';

const Title = ({line1, line2}) => {
    return (
        <View style={{marginTop: 35, marginBottom: 20}}>
            <Text style={{color: 'grey'}}>
                {line1} - {line2}
            </Text>
        </View>
    );
};

const AllBoats = () => {
  return (
    <ScrollView>
        <Title line1 = 'GetABoat' line2='For Sale'/>
      <Boat name="Sea Ray 500 Sundancer" description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.' icon_name='sailboat' picture={require('./img/sea_ray.jpg')}/>
      <Boat name="Four Winns Horizon 180" description='A sporty look and refined details truly set the Horizon 180 above all others.' icon_name='sailboat' picture={require('./img/four_winns.jpg')}/>
      <Boat name="Flipper 640 ST" description='A modern take on the classic, traditional hardtop and perfect for a family picnic.' icon_name='sailboat' picture={require('./img/flipper.jpg')}/>
      <Boat name="Princess V48" description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.' icon_name='sailboat' picture={require('./img/princess.jpg')}/>
      <StatusBar style='auto' />
    </ScrollView>
  );
};

export default AllBoats;