import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';

const Option = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

const OptionsTab = () => {
    const [options, setOptions] = useState([
        { id: 1, title: 'INTERVALO', isActive: true },
        { id: 2, title: 'DADO', isActive: false },
        { id: 3, title: 'MOEDA', isActive: false }
    ])

    const controlState = (selectedOptionId) => {
        console.log('teste')
        const newValues = []
        options.map((option) => {
            if (option.id === selectedOptionId) {
                newValues.push({
                    id: option.id,
                    title: option.title,
                    isActive: true
                })
                console.log('renderizando o selecionado')
            }
            else {
                newValues.push({
                    id: option.id,
                    title: option.title,
                    isActive: false
                })
                console.log('renderizando outra opção')
            }
        })
        setOptions(newValues)
    }

    return (
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
    )
}

const styles = StyleSheet.create({
    rollingType: {
        flexDirection: 'row',
        paddingVertical: 16
    },
    OptionActive: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'column',
        borderBottomColor: '#ff6b00',
        borderBottomWidth: 5,
    },
    optionInactive: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'column'
    }
})

export default OptionsTab