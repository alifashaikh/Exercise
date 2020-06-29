import React from "react";
import loginImg from "../../assets/img/login.svg";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
export class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      Name: "",
      Mobileno: "",
      Email: "",
      Password: ""
      // Department: ''
    };

    this.Email = this.Email.bind(this);

    this.Name = this.Name.bind(this);
    this.Password = this.Password.bind(this);
    // this.Department = this.Department.bind(this);
    this.Mobileno = this.Mobileno.bind(this);
    this.register = this.register.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }

  // Department(event) {
  //   this.setState({ Department: event.target.value })
  // }

  Password(event) {
    this.setState({ Password: event.target.value });
  }
  Mobileno(event) {
    this.setState({ Mobileno: event.target.value });
  }
  Name(event) {
    this.setState({ Name: event.target.value });
  }

  register(event) {
    fetch("http://localhost:51282/Api/login/InsertEmployee", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: this.state.Name,
        Password: this.state.Password,
        Email: this.state.Email,

        Mobileno: this.state.Mobileno
        // Department: this.state.Department
      })
    })
      .then(Response => Response.json())
      .then(Result => {
        if (Result.Status === "Success") this.props.history.push("/Dashboard");
        else alert("Un-authenticated User !!!!!");
      });
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
  
          <div className="form">
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                name="username"
                onChange={this.Name}
                placeholder="name"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="text"
                name="mobile"
                onChange={this.Mobileno}
                placeholder="mobileno"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
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
                type="text"
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
          <button type="button" className="btn" onClick={this.register}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
