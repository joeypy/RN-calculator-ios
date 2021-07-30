/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

/******************************* INTERFACES ********************************/
interface Props {
    text: string,
    fullSize?: boolean,
    color?: 'light-gray' | 'dark-gray' | 'yellow',
    action: ( value: string ) => void,
}

/******************************* COMPONENT *********************************/
const BtnCalculator = ( { text, color= 'dark-gray', fullSize= false, action }: Props ) => {

    return (
        <TouchableOpacity onPress={ () => action(text) } activeOpacity={0.7}>
            <View style={{ 
                    ...styles.btn,
                    ...( color === 'dark-gray') ? styles.darkGray : 
                    ( color === 'light-gray') ? styles.lightGray : styles.yellow,
                    width: ( fullSize ) ? 180 : 80,
                    }}>
                    {/*  Text btn */}
                    <Text style={{
                        ...styles.textBtn,
                        color: (color === 'light-gray') ? 'black' : 'white',
                        textAlign: (fullSize) ? 'left' : 'center',
                        marginLeft: (fullSize) ? 20 : 0
                    }}>
                        { text }
                    </Text>
            </View>
        </TouchableOpacity>
)}

/********************************* STYLES **********************************/
const styles = StyleSheet.create({
    btn: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center'
    },
    textBtn: {
        textAlign: 'center',
        padding: 10,
        fontSize: 38,
        fontWeight: '300'
    },
    darkGray: {
        backgroundColor: '#333333'
    },
    lightGray: {
        backgroundColor: '#A5A5A5'
    },
    yellow: {
        backgroundColor: '#FE9F0A'
    }
})


export default BtnCalculator