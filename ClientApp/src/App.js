import React from 'react';
import { Route, Redirect, useHistory, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CheckingQForm } from './components/OfficeManager/CheckingQForm'
import { EmployeeTable } from './components/OfficeManager/EmployeeTable'
import { NurseQForm } from './components/Nurse/NurseQForm'
import { SupplyTable } from './components/Nurse/SupplyTable'
import { Authentication, Auth } from './components/Authentication'

import './custom.css'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return Auth.isAuthenticated === true
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
    }} />
  )
}

function AuthButton () {
  const history = useHistory()
  return Auth.isAuthenticated === true
    ? <p>
        Welcome! <button onClick={() => {
          Auth.signout(() => history.push('/'))
        }}>Sign out</button>
      <Link to="/clinicinformation"><button>Clinic Information</button></Link>
      <Link to="/supplytable"><button>Supplies</button></Link>
      </p>
    : <p></p>
}

export default function App() {
    return (
      <Layout>
        <AuthButton/>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Authentication} />
        <Route path='/checkingqform' component={CheckingQForm} />
        <PrivateRoute path='/clinicinformation'>
          <EmployeeTable />
        </PrivateRoute>
        <PrivateRoute path='/supplytable'>
          <SupplyTable/>
        </PrivateRoute>
        <Route path='/nurseqform' component={NurseQForm} />
      </Layout>
    );
}
