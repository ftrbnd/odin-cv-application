import React, { useState } from "react";
import InputField from "./InputField";
import EducationCSS from "../styles/Education.module.css";

export default function Education() {
    const [school, setSchool] = useState('');
    const [city, setCity] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [degree, setDegree] = useState('');
    const [major, setMajor] = useState('');
    const [isReadOnly, setReadOnly] = useState(true);

    const handleSchoolInput = e => {
        setSchool(e.target.value);
    }

    const handleCityInput = e => {
        setCity(e.target.value);
    }

    const handleStartYearInput = e => {
        setStartYear(e.target.value);
    }

    const handleEndYearInput = e => {
        setEndYear(e.target.value);
    }
    
    const handleDegreeInput = e => {
        setDegree(e.target.value);
    }

    const handleMajorInput = e => {
        setMajor(e.target.value);
    }

    const toggleReadOnly = e => {
        setReadOnly(!isReadOnly);
    }

    return (
        <div className={EducationCSS.container}>
            <h2>Education</h2>
            <button
                onClick={toggleReadOnly}
                type="submit"
            >
                {isReadOnly ? 'Edit' : 'Done'}
            </button>
            <InputField cssClass={EducationCSS.school} value={school} readOnly={isReadOnly} fieldName="School" handleInputChange={handleSchoolInput} />
            <InputField cssClass={EducationCSS.start} value={startYear} readOnly={isReadOnly} fieldName="Start" handleInputChange={handleStartYearInput} />
            <InputField cssClass={EducationCSS.end} value={endYear} readOnly={isReadOnly} fieldName="End" handleInputChange={handleEndYearInput} />
            <InputField cssClass={EducationCSS.degree} value={degree} readOnly={isReadOnly} fieldName="Degree" handleInputChange={handleDegreeInput} />
            <InputField cssClass={EducationCSS.major} value={major} readOnly={isReadOnly} fieldName="Major" handleInputChange={handleMajorInput} />
            <InputField cssClass={EducationCSS.city} value={city} readOnly={isReadOnly} fieldName="City" handleInputChange={handleCityInput} />
        </div>
    );
}