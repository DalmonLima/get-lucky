import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntervalResult = (props) => {
    return (
        <View style={styles.section}>
            {(props.newResult) ?
                <Text style={styles.resultNumber}>{props.newResult}</Text>
                :
                <Text>Nenhum moeda lançada</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#f1f1f1',
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
