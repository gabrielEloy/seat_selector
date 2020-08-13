import React, { useState, useContext } from 'react'
import Wrapper from './styles';
import { toast } from 'react-toastify'

import StepContext from '../../contexts/StepContext';
import Divider from '../../components/Divider'
import { getBestSeats } from '../../services/api'
import { isValidJSONString, jsonValueValidator } from '../../utils/json';

const SendVenue = () => {
    const {  setCurrentStep, setBestSeats, content, updateValue } = useContext(StepContext)

    const valuesValidator = () => {
        const formErrors = []
        
        
        Object.keys(content).forEach(field => {
            if(!content[field].value){
                formErrors.push(`${content[field].errorLabel} is a mandatory field`)
            }
        })
        
        if(formErrors.length){
            formErrors.forEach(currentError => {
                toast.error(currentError)
            })
            return false
        }
        
        if(content.layout.value){
            const { value: layout } = content.layout
            if(!isValidJSONString(layout)){
                toast.error('The inserted JSON is broken');
                return false
            }

            const missingFields = jsonValueValidator(JSON.parse(layout), ['venue', 'seats'])
            
            if(missingFields.length){
                missingFields.forEach(error => toast.error(`missing field ${error}`))
                return false
            }
        }
        
        return true;
    }
    
    
    const sendVal = async () => {
        const validValues = valuesValidator()

        if(!validValues){
            return
        }

        const {seats, layout} = content
        
        try {
            const res = await getBestSeats(seats.value, layout.value);
            setBestSeats(res)
            setCurrentStep({step: 1, forward: true});
        } catch (err){
            toast.error(err.message)
        }
    }

    return (
        <Wrapper>
            <div className="seats-number-container">
                <p className="title-text">
                    seats number
                </p>
                <input
                    name="seats"
                    onChange={updateValue}
                    type="number"
                    value={content.seats.value}
                >
                    
                </input>
                <Divider />
            </div>
            <div className="main-container">
                <p className="title-text">
                    Venue Layout
                </p>
                <textarea 
                    value={content.layout.value} 
                    name="layout" 
                    onChange={updateValue} 
                />
                <button onClick={sendVal}>
                    see Result
                </button>
            </div>
        </Wrapper>
    )
}

export default SendVenue
