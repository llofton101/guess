// Author: Lauren Lofton
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Input from '../components/Input'

import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';


const GameScreen = props => {

    const [currentGuess,setCurrentGuess] = useState('')
    const [message, setMessage] = useState('I am thinking of a number between 1 and 100');
    const [rounds, setRounds] = useState(0);
    const [confirmed, setConfirmed] = useState(false);
    const currentHigh = useRef(100);
    const currentLow = useRef(1);
    const [between, setBetween] = useState('')
   
    const {randomNumber, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === randomNumber) {
        onGameOver(rounds + 1);
        }
    }, [currentGuess, randomNumber, onGameOver]);

    const resetInputHandler = () => {
        setCurrentGuess('');
        setConfirmed(false);
    };


    const confirmInputHandler = () => {
        const chosenNumber = (parseInt(currentGuess));
  
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', 
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        else if ((chosenNumber) < props.randomNumber)  {
            setRounds(rounds+1);
            setMessage('Your guess ' + currentGuess + ' is too low.');
            currentLow.current = currentGuess;
            setBetween('Hint: Choose a number between ' + currentLow.current + ' and ' + currentHigh.current);
            setCurrentGuess('');
        }
        else if ((chosenNumber) > props.randomNumber) {
            setRounds(rounds+1);
            setMessage('Your guess ' + currentGuess + ' is too high.');
            currentHigh.current = currentGuess;
            setBetween('Hint: Choose a number between ' + currentLow.current + ' and ' + currentHigh.current);
            setCurrentGuess('');
        
        } 
        setConfirmed(true);
        setCurrentGuess(chosenNumber)
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
                    <View style={styles.button1}><SecondaryButton onPress={resetInputHandler}>Clear</SecondaryButton></View>
                    <View style={styles.button2}><MainButton onPress={confirmInputHandler}>Enter</MainButton></View>
                </View>
                <Text style={styles.between}>{between}</Text>
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
        maxWidth: '80%',
    },
    button1: {
        width: 100,
        borderRadius: 25,
        backgroundColor: Colors.accent,
        marginRight: 20,
        
    },
    button2: {
        width: 100,
        borderRadius: 25,
        backgroundColor: Colors.primary,
        marginLeft: 20,
        
    },
    message: {
        fontSize: 22,
        padding: 20,
        textAlign: 'center',
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
    between: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: 'center',
    }
});

export default GameScreen