// Author: Lauren Lofton
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';


const StartGameScreen = props => {

    const [selectedNumber, setSelectedNumber] = useState((Math.floor(Math.random() * 100) + 1))

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Card style={styles.container}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
                <View style={styles.buttonContainer}>
                    <View><MainButton style={styles.button} onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton></View>
                </View>
            </Card>
          
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    title: {
        marginVertical: 10,
    },
    container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        marginBottom: 30,
        borderRadius: 25,
    },
    button: {
        width: 100,
        paddingVertical: 20,
        borderRadius: 25,
    },
})

export default StartGameScreen;