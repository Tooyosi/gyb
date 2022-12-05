import React from 'react'
import { Button } from 'reactstrap'

const ButtonComponent: React.FC<any> = ({ text, loading, ...props }) => {
    return (
        <Button {...props}>{loading ? 'loading...' : text}</Button>
    )
}

export default ButtonComponent