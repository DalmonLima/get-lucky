import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RollingPannel from '../components/rolling-pannel';
import ResultSection from '../components/result-section';
import OptionsTab from '../components/options-tab';

const HomeScreen = () => {

    // STATES
    // Interval States --------
    const  [currentTab, setCurrentTab] = useState('interval')

    const [lastRolledValue, setLastRolledValue] = useState()
    const [repeatRule, setRepeatRule] = useState()
    const [maxRolls, setMaxRolls] = useState()
    const [quantityRolls, setQuantityRolls] = useState()

    // Dice States ------------


    // Coin States ------------



    // FUNCTIONS
    // Global Functions -------
    const tabListener = (mode) => {
        setCurrentTab(mode)
    }


    // Interval Functions -----

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

    // Dice Functions ---------
    // Coin Functions ---------



    const viewMode = (selectedMode) => {
        switch (selectedMode) {

            case 'DADO':
                return (
                    <Text>Dice</Text>
                );
                break;
            case 'MOEDA':
                return (
                    <Text>Coin</Text>
                );
                break;
            default:
                return (
                    <>
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
                    </>
                );
                break;
        }
    }

    return (
        <View style={{flex:1}}>
            <OptionsTab  tabListener={tabListener}/>
            <View style={styles.content}>
                {viewMode(currentTab)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'blue'
    },
})

export default HomeScreen;