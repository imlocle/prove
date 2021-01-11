import React, { Component } from 'react';

export class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            employees: [], 
            patientCount: '',
            loading: true};
    }

    componentDidMount() {
        this.populateEmployeeData();
    }

    static renderEmployeeTable (employee) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Employee Type</th>
                </tr>
                </thead>
                <tbody>
                {employee.map((employee, index) =>
                    <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.employeeTypeId == '1' ? "Physician" : "CNA"}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render(){
        // loading list of Employees
        let employees = this.state.loading
        ? <p><em>Loading...</em></p>
        : EmployeeTable.renderEmployeeTable(this.state.employees);

        return (
            <div>
                <h1>Clinic Information</h1>
                <p>Current Patient Count: {this.state.patientCount}</p>
                <p>Capacity: 100</p>
                <h2>Employees</h2>
                {employees}
            </div>
        )
    }

    async populateEmployeeData() {
        const employeeResponse = await fetch('employee');
        const employeeData = await employeeResponse.json()
        const patientCount = Math.floor(Math.random() * 100)
        this.setState({
            employees: employeeData,
            patientCount: patientCount,
            loading: false
        })
    }
}