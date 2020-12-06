import React, { Component }  from 'react';
import '../../App.css';


class signIn extends Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m6">
            <h2 className="center-align">Login</h2>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="pass" type="password" className="validate" />
                    <label for="pass">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <p>
                      <input type="checkbox" id="remember" />
                      <label for="remember">Remember me</label>
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <div className="col m12">
                    <p className="right-align">
                      <button className="btn btn-large waves-effect waves-light" type="button" name="action">Login</button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default signIn