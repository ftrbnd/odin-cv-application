import React, { Component } from "react";
import InputField from "./InputField";
import ExperienceCSS from "../styles/Experience.module.css";
import uniqid from "uniqid";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: {
                title: '',
                tools: '',
                tasks: '',
                id: uniqid()
            },
            allExperience: [
                {
                    title: 'Discord bot',
                    tools: 'Discord.js, MongoDB',
                    tasks: 'Made a community bot',
                    id: uniqid()
                },
                {
                    title: 'Event Registration Website',
                    tools: 'Nest.js, React.js, MongoDB',
                    tasks: 'Group project',
                    id: uniqid()
                },
                {
                    title: 'My Scratch! App',
                    tools: 'Android SDK, Java, Firebase',
                    tasks: 'Senior project',
                    id: uniqid()
                }
            ],
            isReadOnly: true,
            showForm: false
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }

    handleInputChange(e) {
      switch (e.target.id) {
          case 'titleInput':
              this.setState({
                  experience: {
                      title: e.target.value,
                      tools: this.state.experience.tools,
                      tasks: this.state.experience.tasks,
                      id: this.state.experience.id
                  }
              });
              break;
          case 'toolsInput':
              this.setState({
                  experience: {
                      title: this.state.experience.title,
                      tools: e.target.value,
                      tasks: this.state.experience.tasks,
                      id: this.state.experience.id
                  }
              });
              break;
          case 'tasksInput':
              this.setState({
                  experience: {
                      title: this.state.experience.title,
                      tools: this.state.experience.tools,
                      tasks: e.target.value,
                      id: this.state.experience.id
                  }
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

    displayForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addExperience(e) {
        e.preventDefault();

        if (!this.state.experience.title || !this.state.experience.tools || !this.state.experience.tasks) return;

        this.setState({
            allExperience: this.state.allExperience.concat(this.state.experience),
            experience: {
                title: '',
                tools: '',
                tasks: '',
                id: uniqid()
            },
        });
    }

    render() {
        const { experience, allExperience, isReadOnly, showForm } = this.state;

        return (
            <div className={ExperienceCSS.container}>
                <h2>Experience</h2>
                <button
                    onClick={this.buttonClick}
                    type="submit"
                >
                    {isReadOnly ? 'Edit' : 'Done'}
                </button>
                {
                    allExperience.map((exp) => {
                        return <div key={exp.id} className="allExperience">
                            <InputField class={ExperienceCSS.title} value={exp.title} readOnly={isReadOnly} fieldName="Title" handleInputChange={this.handleInputChange} />
                            <InputField class={ExperienceCSS.tools} value={exp.tools} readOnly={isReadOnly} fieldName="Tools" handleInputChange={this.handleInputChange} />
                            <InputField class={ExperienceCSS.tasks} value={exp.tasks} readOnly={isReadOnly} fieldName="Tasks" handleInputChange={this.handleInputChange} />
                        </div>
                    })
                }
                {
                    !isReadOnly ?
                        <div>
                            <button
                                onClick={this.displayForm}
                            >
                                Add
                            </button>
                            {
                                showForm ? 
                                <form onSubmit={this.addExperience}>
                                    <h4>Add new experience</h4>
                                    <input
                                        onChange={this.handleInputChange}
                                        value={experience.title}
                                        type="text"
                                        id={"titleInput"}
                                        placeholder="title"
                                    />
                                    <input
                                        onChange={this.handleInputChange}
                                        value={experience.tools}
                                        type="text"
                                        id={"toolsInput"}
                                        placeholder="tools"
                                    />
                                    <input
                                        onChange={this.handleInputChange}
                                        value={experience.tasks}
                                        type="text"
                                        id={"tasksInput"}
                                        placeholder="tasks"
                                    />
                                    <button type="submit">Done</button>
                                </form>
                                : <div></div>
                            }
                        </div> 
                        :
                        <div></div>
                }
            </div>
        );
    }
}

export default Experience;