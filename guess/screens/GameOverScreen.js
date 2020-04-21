// Author: Lauren Lofton
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>You found my number!</Text>
            <Card>
                <Text style={DefaultStyles.bodyText}>Number of rounds: {props.roundsNumber} </Text>
                <Text style={DefaultStyles.bodyText}>Number was: {props.randomNumber} </Text>
            </Card>
            <View style={styles.buttonContainer} >
            <Button style={styles.button} color={Colors.primary} title="NEW GAME" onPress={props.onRestart} />
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
        backgroundColor: 'red'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        padding: 30,
    }
});

export default GameOverScreen;