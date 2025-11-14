import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Quiz = ({picture, setAnswer}) => {
    const [ans, setAns] = useState('');

    return(
        <View style={styles.child}>
            <Text style={styles.qntext}>What game is this?</Text>
            <Image source={picture} style={{width: 360, height: 225}} />
            <Picker style = {{alignItems: 'baseline',backgroundColor: 'pink'}} selectedValue={ans} onValueChange={(value) => {
                setAns(value);
                setAnswer(value);
            }}>
                <Picker.Item label="Select a game..." value='' />
                <Picker.Item label='Dark Souls 1' value='1' />
                <Picker.Item label='Dark Souls 3' value='2' />
                <Picker.Item label='Battlefield 1' value='3' />
                <Picker.Item label='Battlefield 5' value='4' />
                <Picker.Item label='Call of Duty: Modern Warefare 2' value='5' />
                <Picker.Item label='Call of Duty: Black Ops 2' value='6' />
                <Picker.Item label='Skyrim' value='7' />
                <Picker.Item label='War Thunder' value='8' />
                <Picker.Item label='Metal Gear Solid: Snake Eater' value='9' />
                <Picker.Item label='Metal Gear Rising' value='10' />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    child: {
        borderWidth: 1,
        overflow: 'hidden',
        alignSelf: 'center',
        width: 360,
        height: 360,
        marginBottom: 10,
    },
    qntext: {
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'blue'
    },
});

export default Quiz;