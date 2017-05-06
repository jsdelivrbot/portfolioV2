import React, { Component } from 'react';

class Education extends Component {

  render() {
    return (
      <div className="col-md-12" id="educationSection">

        <h1 className="section">EDUCATION</h1>

        <div className="grey-box">
          <div className="col-md-4">
            <img src="images/cdLogo.png" className="img-circle eduLogos"></img>
          </div>
          <div className="col-md-3">
            <p className="grey-box-school">
              Coding Dojo Silicon Valley
            </p>
          </div>
          <div className="col-md-3">
            <p className="grey-box-date">2016</p>
          </div>
        </div>

        <div className="grey-box" id="grey-box-bottom">
          <div className="col-md-4">
            <img src="images/ucsbLogo.png" className="img-circle eduLogos"></img>
          </div>
          <div className="col-md-3">
            <p className="grey-box-school">
              University of California, Santa Barbara
            </p>
          </div>
          <div className="col-md-3">
            <p className="grey-box-date">2013 - 2016</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Education;
