import React, { Component } from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';
import Education from '../components/education';
import Technologies from '../components/technologies';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Education />
        <Technologies />
      </div>
    );
  }
}
