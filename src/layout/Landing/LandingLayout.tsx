import React from 'react'

const LandingLayout: React.FC<any> = ({ children }) => {
    return (
        <div>
            The nav bar here
            {children}
            Footer here
        </div>
    )
}

export default LandingLayout