import React from 'react'
import ReactDataGrid from 'react-data-grid'


export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns:  [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }],
            rows: [{ id: 1, title: 'Title 1' }],
            rowGetter:  rowNumber => this.state.rows[rowNumber]
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
            <ReactDataGrid
                columns={this.state.columns}
                rowGetter={this.state.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={500} 
            />
        );
    }
}


