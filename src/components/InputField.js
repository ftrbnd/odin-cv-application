import React, { Component } from "react";

class InputField extends Component {
    render() {
        return (
            <div>
                <label htmlFor={`${this.props.fieldName.toLowerCase()}Input`}>{this.props.fieldName}</label>
                {
                    this.props.readOnly ? (
                        <p>
                            {this.props.value}
                        </p>
                    ) : (
                        <input
                            onChange={this.props.handleInputChange}
                            value={this.props.value}
                            type="text"
                            id={`${this.props.fieldName.toLowerCase()}Input`}
                        />
                    )
                }
            </div>
        )
    }
}

export default InputField;