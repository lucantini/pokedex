import React, { Component } from 'react';
import { connect } from 'react-redux';
import capitalize from 'lodash/capitalize';
import sortBy from 'lodash/sortBy';
import './App.css';

import Button from './components/Button/Button';
import Column from './components/Column/Column';

import { getFilters, getFilter } from './containers/actions/filtersActions';
import { getPoke } from './containers/actions/pokeActions';

class App extends Component {
    constructor(props) {
        super(props);

        this.getFilter = this.getFilter.bind(this);
    }

    componentDidMount() {
        this.props.getFilters();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    getFilter(type) {
        this.props.getFilter(type);
    }

    renderTypeButtons() {
        return sortBy(this.props.filters, (type) => type.name)
            .map(type => (
                <Button
                    key={type.name}
                    onClick={() => this.getFilter(type.name)}
                >
                    {capitalize(type.name)}
                </Button>
        ))
    }

    renderPokes() {
        const orderedPokes = sortBy(this.props.filter, (pk) => pk.pokemon.name)
        return orderedPokes.map(pk => (
            <Button
                key={pk.pokemon.name}
                onClick={() => this.props.getPoke(pk.pokemon.name)}
            >
                {capitalize(pk.pokemon.name)}
            </Button>
        ))
    }

    render() {
        return (
            <div className="app">
                <Column>
                    {this.renderTypeButtons()}
                </Column>
                <Column>
                    {this.renderPokes()}
                </Column>
                <Column width={70}>
                    {/* <Poke /> goes here (?) */}
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                </Column>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFilters: filter => dispatch(getFilters(filter)),
    getFilter: (id, filter) => dispatch(getFilter(id, filter)),
    getPoke: (id) => dispatch(getPoke(id)),
});

const mapStateToProps = ({ filtersReducer, pokeReducer }) => ({
    filters: filtersReducer.filters,
    filter: filtersReducer.filter,
    poke: pokeReducer.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
