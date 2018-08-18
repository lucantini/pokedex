import React from 'react';
import { bool } from 'prop-types';
import b from 'b_'
import { connect } from 'react-redux';

import './GlobalLoader.css';

const GlobalLoader = ({ isLoading }) => {
    function defineClassName() {
        return b('global-loader', {
            open: isLoading,
        });
    }

    return (
        <div className={defineClassName()}>
            <div className="Spinner" />
        </div>
    );
};

GlobalLoader.propTypes = {
    isLoading: bool,
};

GlobalLoader.defaultProps = {
    isLoading: false,
};

const mapStateToProps = ({ globalReducer }) => {
    return {
        isLoading: globalReducer.isLoading,
    }
};

export default connect(mapStateToProps)(GlobalLoader);
