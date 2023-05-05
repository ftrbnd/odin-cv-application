import React, { useState } from "react";
import InputField from "./InputField";
import ExperienceCSS from "../styles/Experience.module.css";
import uniqid from "uniqid";

export default function Experience() {
    const initialExp = {
        title: '',
        tools: '',
        tasks: '',
        id: uniqid()
    };
    const allExp = [
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
    ];

    const [experience, setExperience] = useState(initialExp);
    const [allExperience, setAllExperience] = useState(allExp);
    const [isReadOnly, setReadOnly] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const handleTitleInput = e => {
        setExperience({
            title: e.target.value,
            tools: experience.tools,
            tasks: experience.tasks,
            id: experience.id
        });
    };

    const handleToolsInput = e => {
        setExperience({
            title: experience.title,
            tools: e.target.value,
            tasks: experience.tasks,
            id: experience.id
        });
    };

    const handleTasksInput = e => {
        setExperience({
            title: experience.title,
            tools: experience.tools,
            tasks: e.target.value,
            id: experience.id
        });
    };

    const addExperience = e => {
        e.preventDefault();
        if (!experience.title || !experience.tools || !experience.tasks) return;

        setAllExperience(allExperience.concat(experience));
        setExperience(initialExp);
    };

    const toggleReadOnly = () => {
        setReadOnly(!isReadOnly)
    };

    const toggleShowForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className={ExperienceCSS.container}>
            <h2>Experience</h2>
            <button
                onClick={toggleReadOnly}
                type="submit"
            >
                {isReadOnly ? 'Edit' : 'Done'}
            </button>
            {
                allExperience.map((exp) => {
                    return <div key={exp.id} className="allExperience">
                        <InputField class={ExperienceCSS.title} value={exp.title} readOnly={isReadOnly} fieldName="Title" handleInputChange={handleTitleInput} />
                        <InputField class={ExperienceCSS.tools} value={exp.tools} readOnly={isReadOnly} fieldName="Tools" handleInputChange={handleToolsInput} />
                        <InputField class={ExperienceCSS.tasks} value={exp.tasks} readOnly={isReadOnly} fieldName="Tasks" handleInputChange={handleTasksInput} />
                    </div>
                })
            }
            {
                !isReadOnly ?
                    <div>
                        <button
                            onClick={toggleShowForm}
                        >
                            Add
                        </button>
                        {
                            showForm ? 
                            <form onSubmit={addExperience}>
                                <h4>Add new experience</h4>
                                <input
                                    onChange={handleTitleInput}
                                    value={experience.title}
                                    type="text"
                                    id={"titleInput"}
                                    placeholder="title"
                                />
                                <input
                                    onChange={handleToolsInput}
                                    value={experience.tools}
                                    type="text"
                                    id={"toolsInput"}
                                    placeholder="tools"
                                />
                                <input
                                    onChange={handleTasksInput}
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