import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

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
    const { user } = this.state;

    return (
      <div>
        <General user={user} />
        <Education />
        <Experience />
        <Preview />
      </div>
    );
  }
}

export default App;