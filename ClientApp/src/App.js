import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CheckingQForm } from './components/OfficeManager/CheckingQForm'
import { EmployeeTable } from './components/OfficeManager/EmployeeTable'
import { NurseQForm } from './components/Nurse/NurseQForm'
import { SupplyTable } from './components/Nurse/SupplyTable'

import './custom.css'

export default class App extends Component {
  static displayName = "Southwest Urgent Care";

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/checkingqform' component={CheckingQForm} />
        <Route path='/clinicinformation' component={EmployeeTable} />
        <Route path='/nurseqform' component={NurseQForm} />
        <Route path='/supplytable' component={SupplyTable} />
      </Layout>
    );
  }
}
