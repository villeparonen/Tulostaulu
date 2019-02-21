import React, { Component } from 'react';
import './App.css';

class AddPlayerForm extends Component {
    // state for form. initial value empty. 
    state = {
        value: ''
    };

    // this updates form value change
    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
    }

    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Pelaajan nimi.."
                />
                <input
                    type="submit"
                    value="Lisää!"
                />
            </form>
        );
    }
}

export default AddPlayerForm;