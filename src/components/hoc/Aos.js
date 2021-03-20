import React from 'react'

const Aos = ({ children, timer }) => {
    const styleProps = {
        transition: `all ${timer}ms`
    }
    return children(styleProps)
}

export default Aos
