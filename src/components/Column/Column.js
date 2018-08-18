import React from 'react'

import './Column.css'

const column = (props) => {
    const { width = 15 } = props
    return (
        <div className="column" style={{
            width: width + '%'
        }}>
            {props.children}
        </div>
    )
}

export default column
