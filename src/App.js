import React, { Component } from 'react';
import { connect } from 'react-redux';
import capitalize from 'lodash/capitalize';
import sortBy from 'lodash/sortBy';
import './App.css';

import Button from './components/Button/Button';
import Column from './components/Column/Column';

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
        const orderedTypes = sortBy(this.props.filters, (type) => type.name)
        return orderedTypes
            .map(type => (
                <Button
                    key={type.name}
                    onClick={() => this.getType(type.name)}
                    isLoading={this.state.isLoading}
                >
                    {capitalize(type.name)}
                </Button>
        ))
    }

    renderPokes() {
        const orderedPokes = sortBy(this.state.pokes, (pk) => pk.pokemon.name)
        return orderedPokes.map(pk => (
            <Button
                key={pk.pokemon.name}
                onClick={() => console.log('pokemon clicked!')}
                isLoading={this.state.isLoading}
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
    getFilters: filter => dispatch(getFilters(filter))
});

const mapStateToProps = ({ filtersReducer }) => ({
    filters: filtersReducer.filters,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
