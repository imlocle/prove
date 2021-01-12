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
        this.populateCurrentPatientData();
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
                    <td>{employee.employeeType}</td>
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

    // Fetching current patient data from api
    async populateCurrentPatientData(){
        const patientResponse = await fetch('patient/getAllCurrentPatients')
        const patientData = await patientResponse.json()
        this.setState({
            patientCount: patientData.length
        })
    }

    // Fetching employee data from api
    async populateEmployeeData() {
        const employeeResponse = await fetch('employee');
        const employeeData = await employeeResponse.json()
        this.setState({
            employees: employeeData,
            loading: false
        })
    }
}