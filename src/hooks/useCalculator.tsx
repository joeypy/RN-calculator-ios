/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { useRef, useState } from 'react'
enum Operator {
    add, subtract, multiply, divide
}

export const useCalculator = () => {

    /********************************* STATES **********************************/
    const [lastNumber, setLastNumber] = useState('')
    const [number, setNumber] = useState('0')

    const lastOperation = useRef<Operator>()

    /******************************** FUNCTIONS ********************************/

    // Operations
    const add = () => {
        setValues()
        lastOperation.current = Operator.add
    }
    const subtract = () => {
        setValues()
        lastOperation.current = Operator.subtract
    }
    const multiply = () => {
        setValues()
        lastOperation.current = Operator.multiply
    }
    const divide = () => {
        setValues()
        lastOperation.current = Operator.divide
    }

    // Clean
    const clean = () => {
        setNumber('0')
        setLastNumber('0')
    }

    const calculate = () => {
        if( number === '0' ) return
        const value1 = Number( lastNumber )
        const value2 = Number( number )
        switch ( lastOperation.current ) {
            // Add
            case Operator.add:
                setNumber(`${value1 + value2}`)
                setLastNumber('0')
                break

            // Subtract
            case Operator.subtract:
                setNumber(`${value1 - value2}`)
                setLastNumber('0')
                break
            
            // Multiply
            case Operator.multiply:
                setNumber(`${value1 * value2}`)
                setLastNumber('0')
                break

            // Divide
            case Operator.divide:
                setNumber(`${value1 / value2}`)
                setLastNumber('0')
                break

        }
    }

    const setValues = () => {
        if ( number.endsWith('.') ) {
            setLastNumber(number.slice(0,-1))
        } else {
            setLastNumber(number)
        }
        setNumber('0')
    }

    const deleteLastNumber = () => {
        const newNum = number.slice(0, -1);
        // Validate the negative or the void value
        setNumber(newNum === '' || newNum === '-' ? '0' : newNum);
    }

    const makeNumber = ( value: string ) => {
        // Validations
        // Do not accept double point
        if ( number.includes('.') && value === '.') return

        if ( number.startsWith('0') || number.startsWith('-0')) {
            //  More validations
            if ( value === '.' ) {
                setNumber( number + value )

                // Evaluate if there is another zero and a point
            } else if ( value === '0' && number.includes('.') ) {
                setNumber( number + value )

                // Evaluate if different of zero and do not have a point
            } else if ( value !== '0' && !number.includes('.') ) {
                setNumber( value )

            } else if ( value === '0' && !number.includes('.') ) {
                setNumber( number )
            } else {
                setNumber( number + value )
            }
        } else {
            setNumber( number + value )
        }
    }

    // Add or Remove negative signe
    const positiveNegative = () => {
        if ( number === '0' ) return
        if ( number.includes('-') ) {
            setNumber( number.replace('-', ''))
        } else {
            setNumber( '-' + number )
        }
    }

    return {
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
    }


}