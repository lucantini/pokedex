import React from 'react';
import { node, func, bool } from 'prop-types';

function Button(props) {
    function handleClick() {
        const { onClick } = props;
        onClick && onClick();
    }

    return(
        <button
            onClick={handleClick}
            disabled={props.isLoading}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: node,
    onClick: func,
    isLoading: bool,
};

Button.defaultProps = {
    children: null,
    onClick: null,
    isLoading: false,
};

export default Button;
