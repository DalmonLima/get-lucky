import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntervalResult = (props) => {

    const resultado = props.newResult;
        
    return (
        <View style={styles.section}>
            {resultado ?
                <Text style={styles.resultNumber}>{resultado==1 ? 'Cara': 'Coroa'}</Text>
                :
                <Text>Nenhum moeda lançada</Text>
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
