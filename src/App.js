import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from './user-management-html/index'
import BookingTicket from './BookingTicket/BookingTicket'
import Buble from "./OanTuTi/Buble"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/BookingTicket" component={BookingTicket} />
              <Route exact path="/Buble" component={Buble} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
