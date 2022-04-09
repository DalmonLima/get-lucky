import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable
} from 'react-native';

const CoinConfig = (props) => {
    const min = 1;
    const max = 2;
    const [lastValue, setLastValue] = useState();

    useEffect(() => {
        props.checkResult(lastValue)
    }, [lastValue])

    const randomize = () => {
        //gera o número aleatório
        const random = Math.floor(Math.random() * max + min)
        setLastValue(random)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.rollButton}
                onPress={randomize}
            >
                <Text style={styles.rollButtonText}> JOGAR </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },
    inputSection: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    inputField: {
        height: 48,
        flexGrow: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8
    },
    separator: {
        width: 64,
        textAlign: 'center'
    },
    switchSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    switchLabel: {
        fontSize: 14,
        lineHeight: 16
    },
    rollButton: {
        backgroundColor: '#00A19D',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 24,
        height: 48
    },
    rollButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24
    },
})

export default CoinConfig;