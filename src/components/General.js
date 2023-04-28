import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
        name: this.props.name,
        github: this.props.github,
        email: this.props.email,
        phone: this.props.phone,
    }
  }
  
  handleNameChange = (e) => {
    this.setState({
        name: e.target.value
    })
  };
    
  handleGhChange = (e) => {
    this.setState({
        github: e.target.value
    });
  };
  
  handleEmailChange = (e) => {
    this.setState({
        email: e.target.value
    });
  };
    
  handlePhoneChange = (e) => {
    this.setState({
        phone: e.target.value
    });
  };
    
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
    
  render() {
    return (
        <div>
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="nameInput">Name</label>
                <input
                    onChange={this.handleNameChange}
                    value={this.props.name}
                    type="text"
                    id="nameInput"
                />
                <label htmlFor="ghInput">GitHub</label>
                <input
                    onChange={this.handleGhChange}
                    value={this.props.github}
                    type="text"
                    id="ghInput"
                />
                <label htmlFor="emailInput">Email</label>
                <input
                    onChange={this.handleEmailChange}
                    value={this.props.email}
                    type="text"
                    id="emailInput"
                />
                <label htmlFor="phoneInput">Phone</label>
                <input
                    onChange={this.handlePhoneChange}
                    value={this.props.phone}
                    type="text"
                    id="phoneInput"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
  }
};

export default General;