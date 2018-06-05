import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {
  render(){
  return (
    <div title="About">
      <h1>About Page</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
}

export default About;