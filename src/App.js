import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.min.js'
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import signIn from './views/signIn/signIn'
import signOut from './views/signOut/signOut'
import signUp from './views/signUp/signUp'
import homePage from './views/homePage/homePage'


import Header from './components/header/header'


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/homePage" component={homePage} />
          <Route path="/signIn" component={signIn} />
          <Route path="/signOut" component={signOut} />
          <Route path="/signUp" component={signUp} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
