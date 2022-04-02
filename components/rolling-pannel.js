import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Pressable,
    Switch,
} from 'react-native';
import OptionsTab from './options-tab'

const Dice = () => {
    return (
        <View style={styles.container}>
            <OptionsTab/>
            <Pressable style={styles.rollButton}
                onPress={randomize}
            >
                <Text style={styles.rollButtonText}> SORTEAR </Text>
            </Pressable>
        </View>
    )
}

const RollingPannel = (props) => {
    const [isRepeadBlocked, setisRepeadBlocked] = useState(false);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10);
    const [lastValue, setLastValue] = useState();
    const [rolledValues, setRolledValues] = useState([]);

    const maxrolls = (max - min) + 1;
    const quantityRolled = rolledValues.length;

    const toggleSwitch = () => {
        setisRepeadBlocked(previousState => !previousState);
        setRolledValues([]);
    }

    const minValidation = (newMin) => {
        const newMinTest = Number(newMin)
        const maxTest = Number(max)
        if (newMinTest !== 0 && newMinTest < maxTest) {
            setMin(newMinTest)
        }
    }

    const maxValidation = (newMax) => {
        const newMaxTest = Number(newMax)
        const minTest = Number(min)
        if (newMaxTest !== 0 && newMaxTest > minTest) {
            setMax(newMaxTest)
        }
    }

    useEffect(() => {
        props.checkResult(lastValue)
        props.checkRepeatRule(isRepeadBlocked)
        props.checkMaxRolls(maxrolls)
        props.checkQuantityRolls(quantityRolled)
    }, [min, max, rolledValues, isRepeadBlocked, lastValue])

    const randomize = () => {
        //gera o número aleatório
        const random = Math.floor(Math.random() * maxrolls + min)

        //verifica se tá com o bloqueio para números repetidos
        //se TIVER bloqueio ativo
        if (isRepeadBlocked) {


            //verifica se pode chamar mais valores
            //se sim, vai para as validações
            if (quantityRolled < maxrolls) {

                //verifica se valor gerado pertence aos chamados
                //Se sim, roda outra vez
                if (rolledValues.includes(random)) {
                    randomize()
                }

                //se não pertencer, adiciona
                else {
                    setRolledValues([...rolledValues, random])
                    setLastValue(random)
                }

            }

            //se não, inicia um novo grupo de sorteio
            else {
                setLastValue(random)
                setRolledValues([random])
            }
        }

        //se NÃO TIVER bloqueio
        else {
            setLastValue(random)
        }
    }

    return (
        <View style={styles.container}>
            {/* <OptionsTab/> */}
            <View style={styles.inputSection}>
                <TextInput
                    style={styles.inputField}
                    onChangeText={newValue => minValidation(newValue)}
                    value={min.toString()}
                    keyboardType="numeric"

                />
                <Text style={styles.separator}>a</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={newValue => maxValidation(newValue)}
                    value={max.toString()}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.switchSection}>
                <Text> Repetir número sorteado </Text>
                <Switch
                    trackColor={{ false: "#BBBBBB", true: "#FF964A" }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isRepeadBlocked}
                />
            </View>
            <Pressable style={styles.rollButton}
                onPress={randomize}
            >
                <Text style={styles.rollButtonText}> SORTEAR </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        width: '100%',
    },
    inputSection: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
        backgroundColor: '#ff6b00',
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

export default RollingPannel;