import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Growth from 'components/Cards/Growth'

const LandingLayout: React.FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Growth />
            <Footer />
        </div>
    )
}

export default LandingLayout