import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';

const Option = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

const OptionsTab = (props) => {
    const [options, setOptions] = useState([
        { id: 1, title: 'INTERVALO', isActive: true },
        { id: 2, title: 'DADO', isActive: false },
        { id: 3, title: 'MOEDA', isActive: false }
    ]);

    const [currentMode, setCurrentMode] = useState();

    useEffect(() => {
        props.tabListener(currentMode)
    }, [options])

    const controlState = (selectedOptionId) => {
        const newValues = []
        options.map((option) => {
            if (option.id === selectedOptionId) {
                newValues.push({
                    ...option, isActive: true
                })
                setCurrentMode(option.title)
            }
            else {
                newValues.push({
                    ...option, isActive: false
                })
            }
        })
        setOptions(newValues)
    }

    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.rollingType}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {options.map(option => {
                    return (
                        <Pressable
                            style={option.isActive ? styles.OptionActive : styles.optionInactive}
                            key={option.id}
                            onPressIn={() => controlState(option.id)}
                        >
                            <Option
                                title={option.title}
                                isActive={option.isActive}
                            />
                        </Pressable>
                    )
                })}
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    rollingType: {
        flexDirection: 'row',
        flex: 1,
    },
    OptionActive: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'column',
        borderBottomColor: '#ff6b00',
        borderBottomWidth: 5,
    },
    optionInactive: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'column'
    }
})

export default OptionsTab