import React, { useState } from "react";
import InputField from "./InputField";
import GeneralCSS from "../styles/General.module.css";

export default function General() {
    const [name, setName] = useState('');
    const [github, setGithub] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isReadOnly, setReadOnly] = useState(true);
    
    const handleNameInput = e => {
        setName(e.target.value);
    }

    const handleGithubInput = e => {
        setGithub(e.target.value);
    }

    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handlePhoneInput = e => {
        setPhone(e.target.value);
    }

    const toggleReadOnly = () => {
        setReadOnly(!isReadOnly);
    }
    
    return (
        <div className={GeneralCSS.container}>
            <h2>General Information</h2>
            <button
                onClick={toggleReadOnly}
                type="submit"
            >
                {isReadOnly ? 'Edit' : 'Done'}
            </button>
            <InputField cssClass={GeneralCSS.name} value={name} readOnly={isReadOnly} fieldName="Name" handleInputChange={handleNameInput} />
            <InputField cssClass={GeneralCSS.github} id="github" value={github} readOnly={isReadOnly} fieldName="GitHub" handleInputChange={handleGithubInput} />
            <InputField cssClass={GeneralCSS.email} id="email" value={email} readOnly={isReadOnly} fieldName="Email" handleInputChange={handleEmailInput} />
            <InputField cssClass={GeneralCSS.phone} id="phone" value={phone} readOnly={isReadOnly} fieldName="Phone" handleInputChange={handlePhoneInput} />
        </div>
    );
};