import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntervalResult = (props) => {
    return (
        <View style={styles.section}>
            {(props.newResult) ?
                (
                    (props.repeatRule) ?
                        <>
                            <Text style={styles.resultNumber}>{props.newResult}</Text>
                            <Text>{props.quantityRolls}/{props.maxRolls} sorteados</Text>
                        </>
                        :
                        <Text style={styles.resultNumber}>{props.newResult}</Text>

                )
                :
                <Text>Nenhum número sorteado</Text>
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
