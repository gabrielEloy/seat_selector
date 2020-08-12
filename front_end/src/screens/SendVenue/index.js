import React, { useState, useContext } from 'react'
import Wrapper from './styles';
import { toast } from 'react-toastify'

import StepContext from '../../contexts/StepContext';
import Divider from '../../components/Divider'
import { getBestSeats } from '../../services/api'

const SendVenue = () => {
    const {  setCurrentStep, setBestSeats } = useContext(StepContext)
    const [content, setContent] = useState({
        seats: {
            value: '',
            errorLabel: 'Seats number'
        },
        layout: {
            value: '',
            errorLabel: 'Venue Layout'
        }
    })


    const updateValue = event => {
        setContent({
            ...content,
            [event.target.name]: {
                ...content[event.target.name],
                value: event.target.value
            }
        })
    }

    const sendVal = async () => {
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
