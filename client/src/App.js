import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';

import signIn from './views/signIn/signIn'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/signIn" component={signIn} />
        </Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
