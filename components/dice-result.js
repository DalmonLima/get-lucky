import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const loadImage = (number) => {
    switch (number) {
        case 1:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-1.png")} />;
            break;
        case 2:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-2.png")} />;
            break;
        case 3:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-3.png")} />;
            break;
        case 4:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-4.png")} />;
            break;
        case 5:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-5.png")} />;
            break;
        case 6:
            return <ImageBackground style={{ width: 100, height: 100 }} source={require("../assets/d6-6.png")} />;
            break;
    }
}

const IntervalResult = (props) => {
    return (
        <View style={styles.section}>
            {(props.newResult) ?
                loadImage(props.newResult)
                :
                <Text>Nenhum dado jogado</Text>
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
