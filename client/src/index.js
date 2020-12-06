import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'express';
import { BrowserRouter } from 'react-router-dom';

{/* <Router> */}
// ReactDOM.render(<App />, document.getElementById('root'));
// </Router>
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
