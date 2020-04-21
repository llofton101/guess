// Author: Lauren Lofton
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors'
import GameOverScreen from './GameOverScreen';


const GameScreen = props => {

    const [currentGuess,setCurrentGuess] = useState('')
    const [message, setMessage] = useState('I am thinking of a number between 1-100');
    const [rounds, setRounds] = useState(0);
    const [confirmed, setConfirmed] = useState(false);

    const {randomNumber, onGameOver} = props;


    useEffect(() => {
        if (currentGuess === randomNumber) {
        onGameOver(rounds);
        }
    }, [currentGuess, randomNumber, onGameOver]);

    const resetInputHandler = () => {
        setCurrentGuess('');
        setConfirmed(false);
    };

    

    const confirmInputHandler = () => {
        const chosenNumber = (parseInt(currentGuess));
        if ((chosenNumber) < randomNumber)  {
            setRounds(rounds+1),
            setMessage('Your guess ' + currentGuess + ' is too low.')
            setCurrentGuess('');
        }
        else if ((chosenNumber) > randomNumber) {
            setRounds(rounds+1),
            setMessage('Your guess ' + currentGuess + ' is too high.')
            setCurrentGuess('');
        }
        else if ((chosenNumber) > randomNumber) {
            setRounds(rounds+1)
        }
        else {
            (currentGuess + ' is not a number, try again!')}
        
        setConfirmed(true);
        setCurrentGuess(chosenNumber)
        console.log("chosen " + chosenNumber)
        console.log('random ' + randomNumber)
        
     
    };


    
    return (
        <View style={styles.screen}>
            <Text style={styles.message}>{message}</Text>
            <Card style={styles.inputContainer}>
                <Text style={DefaultStyles.bodyText}>Select a Number</Text>
                <Input 
                    style={styles.input} 
                    blueOnSubmit autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad"
                     maxLength={2} 
                     onChangeText={setCurrentGuess}
                     value={String(currentGuess)} />
                     
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Clear" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Enter" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
    
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    button: {
        width: 100,
    },
    message: {
        fontSize: 18,
        padding: 20,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
});

export default GameScreen