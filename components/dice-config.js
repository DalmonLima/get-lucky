import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity
} from 'react-native';

import D4Icon from '../assets/d4_icon.svg';
import D6Icon from '../assets/d6_icon.svg';
import D8Icon from '../assets/d8_icon.svg';
import D12Icon from '../assets/d12_icon.svg';
import D20Icon from '../assets/d20_icon.svg';


const DiceConfig = (props) => {
    const min = 1;
    const [lastValue, setLastValue] = useState();
    const [diceOptions, setDiceOptions] = useState([
        {
            id: 1,
            title: 'D6',
            isActive: true,
            max: 6,
            icon: <D6Icon width={24} height={24}/>
        },
        {
            id: 2,
            title: 'D4',
            isActive: false,
            max: 4,
            icon: <D4Icon width={24} height={24} />
        },
        {
            id: 3,
            title: 'D8',
            isActive: false,
            max: 8,
            icon: <D8Icon width={24} height={24} />
        },
        {
            id: 4,
            title: 'D12',
            isActive: false,
            max: 12,
            icon: <D12Icon width={24} height={24}/>
        },
        {
            id: 5,
            title: 'D20',
            isActive: false,
            max: 20,
            icon: <D20Icon width={24} height={24}/>
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
                            <View style={option.isActive ? styles.diceActiveContainer : styles.diceInactiveContainer}
                            >
                                <Text style={option.isActive ? styles.diceActiveContent : styles.diceInactiveContent}>{option.title}</Text>
                                {option.icon}
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
    diceActiveContainer: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#rgba(0, 161, 157, 0.5)',
        alignItems: 'center'
    },
    diceInactiveContainer: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#e9e9e9',
        alignItems: 'center'
    },
    diceActiveContent: {
        borderRadius: 4,
        padding: 8,
        color: '#fff'
    },
    diceInactiveContent: {
        borderRadius: 4,
        padding: 8,
        color: '#313131'
    },
    inputSection: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 16,
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