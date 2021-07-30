/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react'
import { StyleSheet } from 'react-native'

/********************************* STYLES **********************************/
export const styles = StyleSheet.create({
    background: {
       flex: 1,
       backgroundColor: 'black',
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    lastResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    }
    
})