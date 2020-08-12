import React, { useContext } from 'react'
import Wrapper from './styles';

import StepContext from '../../contexts/StepContext';
import IconedCard from '../../components/IconedCard'
import arrowLeft from '../../assets/svgs/arrow-left.svg';
import seat from '../../assets/svgs/seat.svg';

const VisualizeBestSeats = () => {
    const { setCurrentStep, setBestSeats, bestSeats: { suggested_seats, message } } = useContext(StepContext)
    const backHandler = () => {
        setCurrentStep({step: 0, forward: false})
        setBestSeats({
            suggested_seats: [],
            message: ''
        })
    }
    return (
        <Wrapper>
            <div className="title-container">
                <p className="title-text">Best seats</p>
                <button onClick={backHandler} className="back-button">
                    <img src={arrowLeft} alt="back arrow" />
                </button>
            </div>
            <div className="best-seats-container">
                {suggested_seats.length ? (
                    suggested_seats.map(currentSeat => (
                        <IconedCard
                            key={currentSeat}
                            icon={seat}
                            text={currentSeat}
                            className='seat-card'
                        />
                    ))
                ) :
                    (
                        <div className="message-container">
                            <p>{message && message}</p>
                        </div>
                    )}

            </div>
        </Wrapper>
    )
}

export default VisualizeBestSeats
