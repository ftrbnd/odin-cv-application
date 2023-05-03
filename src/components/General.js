import React, { Component } from "react";
import InputField from "./InputField";
import GeneralCSS from "../styles/General.module.css";

class General extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            github: '',
            email: '',
            phone: '',
            isReadOnly: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    handleInputChange(e) {
      switch (e.target.id) {
          case 'nameInput':
              this.setState({
                  name: e.target.value
              });
              break;
          case 'githubInput':
              this.setState({
                  github: e.target.value
              });
              break;
          case 'emailInput':
              this.setState({
                  email: e.target.value
              });
              break;
          case 'phoneInput':
              this.setState({
                  phone: e.target.value
              });
              break;
          default:
              break;
      }
    }

    buttonClick() {
        this.setState({
            isReadOnly: !this.state.isReadOnly
        });
    }
    
    render() {
        const { name, github, email, phone, isReadOnly } = this.state;

        return (
            <div className={GeneralCSS.container}>
                <h2>General Information</h2>
                <button
                    onClick={this.buttonClick}
                    type="submit"
                >
                    {isReadOnly ? 'Edit' : 'Done'}
                </button>
                <InputField class={GeneralCSS.name} value={name} readOnly={isReadOnly} fieldName="Name" handleInputChange={this.handleInputChange} />
                <InputField class={GeneralCSS.github} id="github" value={github} readOnly={isReadOnly} fieldName="GitHub" handleInputChange={this.handleInputChange} />
                <InputField class={GeneralCSS.email} id="email" value={email} readOnly={isReadOnly} fieldName="Email" handleInputChange={this.handleInputChange} />
                <InputField class={GeneralCSS.phone} id="phone" value={phone} readOnly={isReadOnly} fieldName="Phone" handleInputChange={this.handleInputChange} />
            </div>
        );
    }
};

export default General;