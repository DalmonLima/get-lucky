import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const CustomInput = (props) => {

    const [isOnError, setIsOnError] = useState(false);

    return (
        <View style={styles.base}>
            <TextInput
                style={isOnError ? styles.onError : styles.default}
                onChangeText={newValue => props.onType(newValue)}
                value={props.value}
                keyboardType={props.keyboard}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
            />
            {isOnError ?
                <Text style={styles.errorMessage}>{props.errorMessage}</Text>
                :
                null
            }
        </View>
    )

}

const styles = StyleSheet.create({

    base: {
        flexGrow: 1 
    },
    default: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        height:32,
        borderColor: 'gray'

    },
    onError: {

        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        height:32,
        borderWidth: 2,
        borderColor: 'red'
    },
    errorMessage: {
        color: 'red'
    }

})

export default CustomInput;