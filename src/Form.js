import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            channel: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        alert('Submit name=' + this.state.name + ' channel= ' + this.state.channel);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                <label>Channel</label>
                <input name="channel" type="number" value={this.state.channel} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


