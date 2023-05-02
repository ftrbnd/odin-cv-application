import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
        github: '',
        email: '',
        phone: '',
      },
      education: [],
      experience: [],
    };
  }


  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;