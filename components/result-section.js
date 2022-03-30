import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultSection = (props) => {
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
                <Text>Nenhum resultado sorteado</Text>
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

export default ResultSection
