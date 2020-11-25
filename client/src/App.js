import React, { Component } from 'react';
import './App.css';
import Headers from './components/header'
import HomePage from './components/HomePage'
import Favicon from 'react-favicon';
import { Switch, Route } from 'react-router-dom'
//import reducers from './reducers'

class App extends Component {
  constructor(props) {
    super(props);
 }

render() {

  return (

      <div className="App">
      
        <Favicon url="" />
        <Headers />
          <Switch>
           
            <Route path="/" exact component={HomePage} />
            
        </Switch>
      </div>
  );
}
}

export default App;
