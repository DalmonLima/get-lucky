import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RollingPannel from '../components/rolling-pannel';
import ResultSection from '../components/result-section';

const HomeScreen = () => {

    const [lastRolledValue, setLastRolledValue] = useState()
    const [repeatRule, setRepeatRule] = useState()
    const [maxRolls, setMaxRolls] = useState()
    const [quantityRolls, setQuantityRolls] = useState()

    const getResultValue = (value) => {
        setLastRolledValue(value);
    }

    const getRepeatRule = (rule) => {
        setRepeatRule(rule)
    }

    const getMaxRolls = (max) => {
        setMaxRolls(max);
    }

    const getQuantityRolls = (rolls) => {
        setQuantityRolls(rolls)
    }

    return (
        <View style = {styles.container}>
            <ResultSection
                newResult={lastRolledValue}
                repeatRule={repeatRule}
                maxRolls={maxRolls}
                quantityRolls={quantityRolls}
                />
            <RollingPannel
                checkResult={getResultValue}
                checkRepeatRule={getRepeatRule}
                checkMaxRolls={getMaxRolls}
                checkQuantityRolls={getQuantityRolls}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-between',
        flexDirection : 'column',
        height : '100%'
    },
})

export default HomeScreen;