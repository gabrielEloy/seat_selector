import React from 'react'
import Wrapper from './styles'

const IconedCard = ({ icon, text, className }) => {
    return (
        <Wrapper
            animate={{ scale: 1,opacity: 1 }}
            initial={{ scale: 0.1, opacity: 0}}
            transition={{ duration: 0.5 }}
            className={className}>
            <div className="icon-container">
                <img src={icon}></img>
            </div>
            <div className="text-container">
                <p>{text}</p>
            </div>
        </Wrapper>
    )
}

export default IconedCard
