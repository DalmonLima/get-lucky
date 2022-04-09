import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Pressable,
    Switch,
} from 'react-native';

const IntervalConfig = (props) => {
    const [isRepeatBlocked, setIsRepeatBlocked] = useState(false);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [lastValue, setLastValue] = useState();
    const [rolledValues, setRolledValues] = useState([]);
    const [isOnError, setIsOnError] = useState({
        status: false,
        message: ''
    })

    const maxrolls = (max - min) + 1;
    const quantityRolled = rolledValues.length;

    const toggleSwitch = () => {
        setIsRepeatBlocked(previousState => !previousState);
        setRolledValues([]);
    }

    const minValidation = (newMin) => {
        const newMinTest = Number(newMin)
        setMin(newMinTest)
    }

    const maxValidation = (newMax) => {
        const newMaxTest = Number(newMax)
        setMax(newMaxTest)
    }

    useEffect(() => {
        props.checkResult(lastValue)
        props.checkRepeatRule(isRepeatBlocked)
        props.checkMaxRolls(maxrolls)
        props.checkQuantityRolls(quantityRolled)
    }, [min, max, rolledValues, isRepeatBlocked, lastValue, isOnError])

    const tossCheck = () => {
        if (min && max) {

            if (min < max) {
                setIsOnError({
                    status: false,
                    message: ''
                })
                randomize()
            }
            else {
                setIsOnError({
                    status: true,
                    message: 'valor máximo precisa ser maior que o mínimo'
                })
            }
        }
        else {
            setIsOnError({
                status: true,
                message: 'campo com valor vazio'
            })
        }
    }

    const randomize = () => {
        //gera o número aleatório
        const random = Math.floor(Math.random() * maxrolls + min)

        //verifica se tá com o bloqueio para números repetidos
        //se TIVER bloqueio ativo
        if (isRepeatBlocked) {


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
            <View style={styles.inputSection}>

                <TextInput
                    style={styles.inputField}
                    onChangeText={newValue => minValidation(newValue)}
                    value={min.toString()}
                    keyboardType="numeric"
                    maxLength={4}
                    placeholder='min'
                />

                <Text style={styles.separator}>a</Text>

                <TextInput
                    style={styles.inputField}
                    onChangeText={newValue => maxValidation(newValue)}
                    value={max.toString()}
                    keyboardType="numeric"
                    maxLength={4}
                    placeholder='max'
                />
            </View>

            {isOnError.status ? 
            <View style={{backgroundColor:'orange', padding: 8, borderRadius: 8, marginTop: 8}}>
                <Text style={{color: 'white'}}>{isOnError.message}</Text>
            </View>
            :
            null}

            <View style={styles.switchSection}>
                <Text> Não repetir número sorteado </Text>
                <Switch
                    trackColor={{ false: "#BBBBBB", true: "#00A19D" }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isRepeatBlocked}
                />
            </View>
            <Pressable style={styles.rollButton}
                onPress={() => tossCheck()}
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
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },
    errorBox: {
        backgroundColor:'orange',
        padding: 8,
        borderRadius: 8,
        marginTop: 8
    },
    inputSection: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-evenly'
    },
    inputField: {
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        flexBasis: 100
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

export default IntervalConfig;