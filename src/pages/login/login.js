import React from "react";
import loginImg from "../../assets/img/login.svg";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
export class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: ""
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  login(event) {
    debugger;
    fetch("http://localhost:51282/Api/login/Login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password
      })
    })
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
        if (result.Status == "Invalid") alert("Invalid User");
        else this.props.history.push("/Dashboard");
      });
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
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
        <div class="social-container">
          <a href="#" class="social">
            <FaFacebookF />
          </a>
          <a href="#" class="social">
            <FaGooglePlusG />
          </a>
          <a href="#" class="social">
            <FaLinkedinIn />
          </a>
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
