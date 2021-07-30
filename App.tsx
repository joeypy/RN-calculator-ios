/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'

const App = () => {

    return (
       <SafeAreaView style={ styles.background }>
            <StatusBar 
                backgroundColor="black"
                barStyle="light-content"
            />
            <CalculadoraScreen />
       </SafeAreaView>
)}

export default App