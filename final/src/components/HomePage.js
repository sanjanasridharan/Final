import React from 'react'
import  StepProgress from './StepProgress'
import CheckStatusProvider from '../context/CheckStatus'
function HomePage() {
    return (
        <div>
            <CheckStatusProvider>
            <StepProgress/>
            </CheckStatusProvider>
        </div>
    )
}

export default HomePage
