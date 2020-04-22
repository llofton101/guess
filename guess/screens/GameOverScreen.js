// Author: Lauren Lofton
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Card from '../components/Card';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>You found my number!</Text>
            <Card>
                <Text style={DefaultStyles.bodyText}>Number of Rounds: {props.roundsNumber} </Text>
                <Text style={DefaultStyles.bodyText}>Number: {props.randomNumber} </Text>
            </Card>
            <View style={styles.buttonContainer} >
            <MainButton style={styles.button} color={Colors.primary} onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 30
    },
    button: {
        width: 100,
        backgroundColor: 'red',
        borderRadius: 25,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        padding: 30,
    }
});

export default GameOverScreen;