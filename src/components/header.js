import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="col-md-4">
          <img src="../images/leftCurlyBrace.png" className="curly_brace"></img>
        </div>
        <div className="col-md-4">
          <img src="../images/me.png" className="img-circle"></img>
          <p>Full-Stack Developer</p>
          <p>San Jose, Ca</p>
        </div>
        <div className="col-md-4">
          <img src="../images/rightCurlyBrace.png" className="curly_brace"></img>
        </div>
      </header>
    );
  }
}

export default Header;
