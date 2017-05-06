import React, { Component } from 'react';

class Technologies extends Component {

  render() {
    return (
      <div className="col-md-12" id="technologiesSection">

        <div className="row">

          <div className="col-md-3">
            <h2>Languages:</h2>
          </div>

          <div className="col-md-9">
            <p className="skills">Javascript</p>
            <p className="skills">Rails</p>
            <p className="skills">Java</p>
            <p className="skills">Python</p>
          </div>

        </div>

      </div>
    );
  }
}

export default Technologies;
