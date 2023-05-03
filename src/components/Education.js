import React, { Component } from "react";
import InputField from "./InputField";
import EducationCSS from "../styles/Education.module.css";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            city: '',
            startYear: '',
            endYear: '',
            degree: '',
            major: '',
            isReadOnly: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    handleInputChange(e) {
      switch (e.target.id) {
          case 'schoolInput':
              this.setState({
                  school: e.target.value
              });
              break;
          case 'cityInput':
              this.setState({
                  city: e.target.value
              });
              break;
          case 'startInput':
              this.setState({
                  startYear: e.target.value
              });
              break;
          case 'endInput':
              this.setState({
                  endYear: e.target.value
              });
              break;
          case 'degreeInput':
              this.setState({
                  degree: e.target.value
              });
              break;
          case 'majorInput':
              this.setState({
                  major: e.target.value
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
        const { school, city, startYear, endYear, degree, major, isReadOnly } = this.state;

        return (
            <div className={EducationCSS.container}>
                <h2>Education</h2>
                <button
                    onClick={this.buttonClick}
                    type="submit"
                >
                    {isReadOnly ? 'Edit' : 'Done'}
                </button>
                <InputField class={EducationCSS.school} value={school} readOnly={isReadOnly} fieldName="School" handleInputChange={this.handleInputChange} />
                <InputField class={EducationCSS.start} value={startYear} readOnly={isReadOnly} fieldName="Start" handleInputChange={this.handleInputChange} />
                <InputField class={EducationCSS.end} value={endYear} readOnly={isReadOnly} fieldName="End" handleInputChange={this.handleInputChange} />
                <InputField class={EducationCSS.degree} value={degree} readOnly={isReadOnly} fieldName="Degree" handleInputChange={this.handleInputChange} />
                <InputField class={EducationCSS.major} value={major} readOnly={isReadOnly} fieldName="Major" handleInputChange={this.handleInputChange} />
                <InputField class={EducationCSS.city} value={city} readOnly={isReadOnly} fieldName="City" handleInputChange={this.handleInputChange} />
            </div>
        );
    }
}

export default Education;