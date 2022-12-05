import Header from 'components/Header/Header'
import React from 'react'

const LandingLayout: React.FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            Footer here
        </div>
    )
}

export default LandingLayout