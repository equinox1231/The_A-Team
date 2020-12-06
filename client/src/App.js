import React, { Component } from 'react';
import './App.css';
import Headers from './components/header'
import HomePage from './components/HomePage'
import Favicon from 'react-favicon';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
//import Signin from './views/signin/signin'
import Signup from './views/signup/signup'
import Signout from './views/signout/signout'

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);
=======
import { BrowserRouter , Switch, Route, } from 'react-router-dom'
//import reducers from './reducers'
>>>>>>> b27b320c530bf41ad22eae055be78b36f4f757ba

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

<<<<<<< HEAD
    return (
      <Provider store={store}>
        <div className="App">
          <Favicon url="" />
          <BrowserRouter>
            <Headers />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/signout" component={Signout} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
=======
      <div className="App">
      
        <Favicon url="" />
        <Headers />
          <BrowserRouter>
            <Switch>
            
              <Route path="/" exact component={HomePage} />
              
            </Switch>
        </BrowserRouter>
      </div>
  );
}
>>>>>>> b27b320c530bf41ad22eae055be78b36f4f757ba
}

export default App;
