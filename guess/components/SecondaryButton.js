// Author: Lauren Lofton
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const SecondaryButton = props => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create ({
    button: {
        backgroundColor: Colors.accent,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16,
    },
});

export default SecondaryButton;