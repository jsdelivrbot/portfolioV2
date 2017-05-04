import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav role="navigation" className="navbar navbar-default navbar-fixed-top">
        <div className="containerNavBar" id="navbar-container">
            <div className="col-md-3">
              <div className="navbar-header">
                <h3 id="title">Alejandro Diehl</h3>
              </div>
            </div>
            <div className="col-md-9">
              <div className="sections">
                <a>Home</a>
                <a>About</a>
                <a>Education</a>
                <a>Skills</a>
                <a>Portfolio</a>
              </div>
            </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
