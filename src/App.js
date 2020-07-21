import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Mainpage from './components/layout/mainpage';
import Navbar from './components/layout/navbar';
import Contacts from './components/layout/contacts';
import Donate from './components/layout/donate'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/1" component={Contacts} />
            <Route exact path="/2" component={Donate} />
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
