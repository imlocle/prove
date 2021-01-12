import React, { Component } from 'react';

export class SupplyTable extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            supplies: [], 
            loading: true};
    }

    componentDidMount() {
        this.populateSupplyData();
    }

    static renderSupplyTable (supply) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {supply.map((supply, index) =>
                    <tr key={index}>
                    <td>{supply.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render(){
        // loading list of Supplies
        let supplies = this.state.loading
        ? <p><em>Loading...</em></p>
        : SupplyTable.renderSupplyTable(this.state.supplies);

        return (
            <div>
                <h1>Clinic Information</h1>
                <h2>Supplies</h2>
                {supplies}
            </div>
        )
    }

    // Fetching supply data from api
    async populateSupplyData() {
        const supplyResponse = await fetch('supply');
        const supplyData = await supplyResponse.json()
        this.setState({
            supplies: supplyData,
            loading: false
        })
    }
}