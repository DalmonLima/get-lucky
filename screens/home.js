import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IntervalConfig from '../components/interval-config';
import IntervalResult from '../components/interval-result';
import DiceConfig from '../components/dice-config';
import DiceResult from '../components/dice-result';
import CoinConfig from '../components/coin-config';
import CoinResult from '../components/coin-result';
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
                    <>
                        <DiceResult
                            newResult={lastRolledValue}
                            repeatRule={repeatRule}
                            maxRolls={maxRolls}
                            quantityRolls={quantityRolls}
                        />
                        <DiceConfig
                            checkResult={getResultValue}
                            checkRepeatRule={getRepeatRule}
                            checkMaxRolls={getMaxRolls}
                            checkQuantityRolls={getQuantityRolls}
                        />
                    </>
                );
                break;
            case 'MOEDA':
                return (
                    <>
                        <CoinResult
                            newResult={lastRolledValue}
                            repeatRule={repeatRule}
                            maxRolls={maxRolls}
                            quantityRolls={quantityRolls}
                        />
                        <CoinConfig
                            checkResult={getResultValue}
                            checkRepeatRule={getRepeatRule}
                            checkMaxRolls={getMaxRolls}
                            checkQuantityRolls={getQuantityRolls}
                        />
                    </>
                );
                break;
            default:
                return (
                    <>
                        <IntervalResult
                            newResult={lastRolledValue}
                            repeatRule={repeatRule}
                            maxRolls={maxRolls}
                            quantityRolls={quantityRolls}
                        />
                        <IntervalConfig
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