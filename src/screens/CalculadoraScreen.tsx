/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import BtnCalculator from '../components/BtnCalculator';
import { useCalculator } from '../hooks/useCalculator';

const CalculadoraScreen = () => {
    
    /******************************* CUSTOM HOOK *******************************/
    const {
        number,
        setNumber,
        lastNumber,
        setLastNumber,
        add,
        subtract,
        multiply,
        divide,
        setValues,
        positiveNegative,
        makeNumber,
        deleteLastNumber,
        calculate,
        clean
    } = useCalculator()

    /********************************* RETURN **********************************/
    return (
        <View style={ styles.mainContainer }>
            {
                ( lastNumber !== '0' ) && (
                    <Text style={ styles.lastResult }> { lastNumber }</Text>
                )
            }
            <Text style={ styles.result }
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit> { number } </Text>

            {/* Btn row */}
            <View style={ styles.row }>
                    <BtnCalculator text="C" color="light-gray" action={ clean } />
                    <BtnCalculator text="+/-" color="light-gray" action={ positiveNegative } />
                    <BtnCalculator text="del" color="light-gray" action={ deleteLastNumber } />
                    <BtnCalculator text="/" color="yellow" action={ divide }/>
            </View>

            {/* Btn row */}
            <View style={ styles.row }>
                    <BtnCalculator text="7" action={ () => makeNumber("7") } />
                    <BtnCalculator text="8" action={ () => makeNumber("8") } />
                    <BtnCalculator text="9" action={ () => makeNumber("9") } />
                    <BtnCalculator text="X" color="yellow" action={ multiply }/>
            </View>

            {/* Btn row */}
            <View style={ styles.row }>
                    <BtnCalculator text="4" action={ () => makeNumber("4") } />
                    <BtnCalculator text="5" action={ () => makeNumber("5") } />
                    <BtnCalculator text="6" action={ () => makeNumber("6") } />
                    <BtnCalculator text="—" color="yellow" action={ subtract } />
            </View>

            {/* Btn row */}
            <View style={ styles.row }>
                    <BtnCalculator text="1" action={ () => makeNumber("1") } />
                    <BtnCalculator text="2" action={ () => makeNumber("2") } />
                    <BtnCalculator text="3" action={ () => makeNumber("3") } />
                    <BtnCalculator text="+" color="yellow" action={ add }/>
            </View>

            {/* Btn row */}
            <View style={ styles.row }>
                    <BtnCalculator text="0" action={ () => makeNumber("0") } fullSize />
                    <BtnCalculator text="." action={ () => makeNumber(".") } />
                    <BtnCalculator text="=" color="yellow" action={ calculate } />
            </View>

        </View>
    )}



export default CalculadoraScreen

