import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div id="aboutSection">
        <h1 className="section">ABOUT</h1>

        <p className="aboutPar">
          Hello and welcome to my site! My name is Alejandro and I'm a Full-Stack developer always excited to try out new technologies and see  how I can apply them. I have spend countless time working to improve my skills in learning how to make web applications with creative designing and smooth functionality. Even though I come from unorthodox schooling and working background, I have come to love and enjoy programming.
        </p>

        <p className="aboutPar" id="aboutPar-bottom">
          A little more about myself. I'm a food enthusiast, a world traveler and a sports fanatic that can spend all day talking about them and always looking to discuss them from any perspective. If you are looking for a soft engineer, or just want to chat, don't hesitate to contact me!
        </p>
      </div>
    );
  }
}

export default About;
