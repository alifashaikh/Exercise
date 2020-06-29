import React from "react";
import loginImg from "../assets/img/login.svg"; 
export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: ""
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                name="email"
                onChange={this.Email}
                placeholder="email"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                onChange={this.Password}
                placeholder="password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login
