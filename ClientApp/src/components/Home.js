import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Link to='/login'><button>Login</button></Link>
        <Link to="/checkingqform"><button>Patient Form</button></Link>
        <Link to="/nurseqform"><button>Nurse Form</button></Link>
      </div>
    );
  }
}
