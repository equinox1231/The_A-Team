
import React, { Component } from 'react';
import '../signUp/signUp.css'

class signUp extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit();
    console.log(this.state);
  }

  render() {
    return (
    
      <div className="container logon">
        <div className="col s12 m4 12">
          <div className="card">
            
            <div className="card-action matte-black">
              <h3>SIGN UP</h3>
            </div>

            <div className="card-content">
              
              <div className="form-field">
                {/* <label htmlFor="firstName">First Name</label> */}
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="First Name" 
                  // value={this.state.firstName}
                  onChange={e => this.change(e)}
                />
              </div>

              <div className="form-field">
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Last Name"
                  onChange={e => this.change(e)}
                />
              </div>

              <div className="form-field">
                {/* <label htmlFor="username">Username</label> */}
                <input 
                  type="text" 
                  id="username" 
                  placeholder="Username"
                  onChange={e => this.change(e)}
                />
              </div>

              <div className="form-field">
                {/* <label htmlFor="email">Email</label> */}
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email"
                  onChange={e => this.change(e)}
                />
              </div>

              <div className="form-field">
                {/* <label htmlFor="Password">Password</label> */}
                <input 
                  type="password"
                  id="password" 
                  placeholder="Password"
                  onChange={e => this.change(e)}
                />
              </div>

              <div className="form-field">
                {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                <input 
                  type="password" 
                  id="confirmPassword" 
                  placeholder="Confirm Password"
                  onChange={e => this.change(e)}
                />
              </div>
              
              <div className="form-field">
                <button className="btn-large matte-black" onClick={e => this.onSubmit(e)}>Sign Up</button>  
              </div>

            </div>

          </div>
        </div>
      </div>
      
    )
  }
}

export default signUp;