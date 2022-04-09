import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import diceImages from './dice-images';

const IntervalResult = (props) => {

    return (
        <View style={styles.section}>
            {(props.diceNumber) ?
                <ImageBackground style={{ width: 176, height: 176 }} source={diceImages[props.diceType][props.diceNumber]} />
                :
                <Text>Nenhum dado jogado</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    resultNumber: {
        fontSize: 72,
        lineHeight: 88,
        fontWeight: 'bold'
    }
})

export default IntervalResult
