import React from 'react'
import { number, node } from 'prop-types';

import './Column.css'

const Column = ({ width, children }) => {
    return (
        <div className="column" style={{
            width: width + '%'
        }}>
            {children}
        </div>
    )
};

Column.propTypes = {
    width: number,
    children: node,
};

Column.defaultProps = {
    width: 15,
    children: null,
};

export default Column
