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
    const [currentTab, setCurrentTab] = useState('interval');

    // Interval States --------
    const [lastRolledValue, setLastRolledValue] = useState();
    const [repeatRule, setRepeatRule] = useState();
    const [maxRolls, setMaxRolls] = useState();
    const [quantityRolls, setQuantityRolls] = useState();

    // Dice States ------------
    const [diceTossed, setDiceTossed] = useState();
    const [diceType, setDiceType] = useState();

    // Coin States ------------
    const [coinResultValue, setCoinResultValue] = useState();


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
    const getDiceResultValue = (value) => {
        setDiceTossed(value);
    }

    const getDiceType = (type) => {
        setDiceType(type);
    }

    // Coin Functions ---------
    const getCoinResultValue = (value) => {
        setCoinResultValue(value);
    }


    const viewMode = (selectedMode) => {
        switch (selectedMode) {

            case 'DADO':
                return (
                    <>
                        <DiceResult
                            diceNumber={diceTossed}
                            diceType={diceType}
                        />
                        <DiceConfig
                            checkDiceResult={getDiceResultValue}
                            checkDiceType={getDiceType}
                        />
                    </>
                );
                break;
            case 'MOEDA':
                return (
                    <>
                        <CoinResult
                            newResult={coinResultValue}
                        />
                        <CoinConfig
                            checkResult={getCoinResultValue}
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
        backgroundColor: '#f1f1f1'
    },
})

export default HomeScreen;