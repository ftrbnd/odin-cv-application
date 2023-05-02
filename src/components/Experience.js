import React, { Component } from "react";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: {
                title: '',
                tools: [],
                tasks: [],
            },
            allExperience: [],
            isReadOnly: true
        };
        
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.setState({
            isReadOnly: !this.state.isReadOnly
        });
    }

    render() {
        const { isReadOnly } = this.state;

        return (
            <div className="experienceInfo">
                <h2>Experience</h2>
                
                <button
                    onClick={this.buttonClick}
                    type="submit"
                >
                    {isReadOnly ? 'Edit' : 'Done'}
                </button>
            </div>
        );
    }
}

export default Experience;