import React, { Component } from "react";

class Navbar extends Component{
    state = {
        Company: "Geeksynergy Technologies Pvt Ltd",
        Address: " Sanjaynagar,Bengaluru-56",
        Phone: "XXXXXXXX09",
        Email: "XXXXX@gmail.com"
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">Dashboard</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Company Info
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <p className="dropdown-item"> { this.state.Company}</p>
                    <p className="dropdown-item" > { this.state.Address}</p>
                    <p className="dropdown-item"> { this.state.Phone}</p>
                    <p className="dropdown-item"> { this.state.Email}</p>
                  </div>
                </li>         
              </ul>
            </div>
          </nav>   
            </div>
        )
    }
}
export default Navbar