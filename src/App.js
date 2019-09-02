import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    )
  }
}
