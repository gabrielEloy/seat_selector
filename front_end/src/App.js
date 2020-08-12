import React, { useState } from 'react';
import Wrapper from './AppStyles'
import SteppedContainer from './components/SteppedContainer';
import StepContext from './contexts/StepContext';

import SendVenue from './screens/SendVenue'
import VisualizeBestSeats from './screens/VisualizeBestSeats'

const App = () => {
  const [currentStep, setCurrentStep] = useState({
    step: 0,
    forward: false
  })
  const [bestSeats, setBestSeats] = useState({
    suggested_seats: [],
    message: ''
  })

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep, bestSeats, setBestSeats }}>
      <Wrapper>
        <header>
          <h1>Seat Selector</h1>
        </header>
        <main>
          <SteppedContainer
            steps={[<SendVenue />, <VisualizeBestSeats />]}
            currentStep={currentStep}
          />
        </main>
      </Wrapper>
    </StepContext.Provider>
  )
}

export default App
