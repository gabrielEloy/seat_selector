import React from 'react'
import Wrapper from './styles'
import { motion } from "framer-motion"


const SteppedContainer = ({ steps, currentStep }) => {
    const initialAnimation = currentStep.forward 
    ? {x: 600}
    : {x: -600}
    
    return (
        <Wrapper>
            <motion.div
                key={currentStep.step}
                initial={initialAnimation}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {steps[currentStep.step]}
            </motion.div>
        </Wrapper>
    )
}

export default SteppedContainer
