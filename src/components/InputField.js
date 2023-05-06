import React from "react";
import InputFieldCSS from "../styles/InputField.module.css";

export default function InputField({ cssClass, value, readOnly, fieldName, handleInputChange }) {
    console.log(cssClass, `${fieldName.toLowerCase()}Input`);
    return (
        <div className={`${cssClass} ${InputFieldCSS.inputField}`}>
            <label htmlFor={`${fieldName.toLowerCase()}Input`}>{fieldName}</label>
            {
                readOnly ? (
                    <p>
                        {value}
                    </p>
                ) : (
                    <input
                        onChange={handleInputChange}
                        value={value}
                        type="text"
                        id={`${fieldName.toLowerCase()}Input`}
                    />
                )
            }
        </div>
    );
}