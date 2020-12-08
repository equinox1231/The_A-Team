import React, { Component }  from 'react';
import '../../App.css';
import '../signIn/signIn.css'

class signIn extends Component {

  render() {
    return (
      <div className="container login">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            
            <div className="card-action matte-black">
              <h3>SIGN IN</h3>
            </div>

            <div className="card-content">
              
              <div className="form-field">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" id="username" placeholder="Email/Username"/>
              </div>

              <div className="form-field">
                {/* <label htmlFor="Password">Password</label> */}
                <input type="password" id="password" placeholder="Password"/>
              </div>

              {/* <div className="form-field">
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">Remember Me!</label>
              </div> */}

              <div className="form-field">
                <button className="btn-large matte-black">Sign In</button>  
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}



export default signIn