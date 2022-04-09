import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity
} from 'react-native';

const DiceConfig = (props) => {
    const min = 1;
    const [lastValue, setLastValue] = useState();
    const [diceOptions, setDiceOptions] = useState([
        {
            id: 1,
            title: 'D6',
            isActive: true,
            max: 6
        },
        {
            id: 2,
            title: 'D4',
            isActive: false,
            max: 4
        },
        {
            id: 3,
            title: 'D8',
            isActive: false,
            max: 8
        },
        {
            id: 4,
            title: 'D12',
            isActive: false,
            max: 12
        },
        {
            id: 5,
            title: 'D20',
            isActive: false,
            max: 20
        }
    ])
    const [max, setMax] = useState(diceOptions.find(option => option.isActive == true).max);

    useEffect(() => {
        props.checkDiceResult(lastValue)
        props.checkDiceType(max)
    }, [max, lastValue])

    const randomize = () => {
        //gera o número aleatório
        const random = Math.floor(Math.random() * max + min)
        setLastValue(random)
    };

    const controlState = (selectedOptionId) => {
        const newValues = []
        diceOptions.map((option) => {
            if (option.id === selectedOptionId) {
                newValues.push({
                    ...option, isActive: true
                })
                setMax(option.max)
            }
            else {
                newValues.push({
                    ...option, isActive: false
                })
            }
        })
        setDiceOptions(newValues)
        setLastValue(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputSection}>

                {diceOptions.map((option) => {
                    return (
                        <TouchableOpacity
                            onPress={() => controlState(option.id)}
                            key = {option.id}
                        >
                            <View style={option.isActive ? styles.diceActive : styles.diceInactive}
                            >
                                <Text>{option.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <Pressable style={styles.rollButton} onPress={randomize}>
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
    diceActive: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#ff6b00'
    },
    diceInactive: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#e9e9e9'
    },
    inputSection: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 16
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

export default DiceConfig;