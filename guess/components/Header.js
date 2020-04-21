// Author: Lauren Lofton
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors'
import TitleText from './TitleText'

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white'
    }

});

export default Header;