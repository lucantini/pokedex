import React, { Component } from 'react';
import { capitalize } from 'lodash';
import './App.css';

import Button from './components/Button/Button';

import { getType, getTypes } from './controllers/pokeControl';

class App extends Component {
    constructor() {
        super();

        this.state = {
            pokes: [],
            types: [],
            isLoading: false,
        };
        this.getType = this.getType.bind(this);
    }

    componentDidMount() {
        getTypes().then(resp => {
            this.setState({ types: resp.data.results})
        }).catch((e) => {
            throw e;
        }).finally(() => {
            this.setState({ isLoading: false })
        });
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
        return this.state.types.map(type => (
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

export default App;
