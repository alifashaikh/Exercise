import React from "react";
export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Mobileno: "",
      Email: "",
      Password: ""
    };

    this.Email = this.Email.bind(this);
    this.Name = this.Name.bind(this);
    this.Password = this.Password.bind(this);
    this.Mobileno = this.Mobileno.bind(this);
    this.register = this.register.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  Mobileno(event) {
    this.setState({ Mobileno: event.target.value });
  }
  Name(event) {
    this.setState({ Name: event.target.value });
  }

  register = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
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
        <div className="footer">
          <button type="button" className="btn" onClick={this.register}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register