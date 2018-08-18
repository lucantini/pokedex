import React, { Component } from 'react';
import { connect } from 'react-redux';
import capitalize from 'lodash/capitalize';
import './App.css';

import Button from './components/Button/Button';

import { getType } from './controllers/pokeControl';
import { getFilters } from './containers/actions/filtersActions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokes: [],
            types: [],
            isLoading: false,
        };
        this.getType = this.getType.bind(this);
    }

    componentDidMount() {
        this.props.getFilters();
    }

    getType(type) {
        this.setState({ isLoading: true });
        getType(type).then(resp => {
            this.setState({ pokes: resp.data.pokemon })
        }).catch((e) => {
            throw e;
        }).finally(() => {
            this.setState({ isLoading: false })
        });
    }

    renderTypeButtons() {
        return this.props.filters.map(type => (
            <Button
                onClick={() => this.getType(type.name)}
                isLoading={this.state.isLoading}
            >
                {capitalize(type.name)}
            </Button>
        ))
    }

    renderPokes() {
        return this.state.pokes.map(pk => (
            <div key={pk.pokemon.name}>
                {pk.pokemon.name}
            </div>
        ))
    }

    render() {
        return (
            <div className="app">
                {this.renderTypeButtons()}
                {this.renderPokes()}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFilters: filter => dispatch(getFilters(filter))
});

const mapStateToProps = ({ filtersReducer }) => ({
    filters: filtersReducer.filters,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
