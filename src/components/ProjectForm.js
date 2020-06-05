import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px 10%;
`;

const initialValues = {
  name: "",
  description: "",
};

const ProjectForm = (props) => {
  const { addProject } = props;
  const [newProject, setNewProject] = useState(initialValues);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addProject(newProject);
    setNewProject(initialValues);
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <legend>New Project:</legend>
      <div>
        <label>Name:&nbsp;</label>
        <input
          type="text"
          name="name"
          value={newProject.name}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>Description:&nbsp;</label>
        <input
          type="text"
          name="description"
          value={newProject.description}
          onChange={inputHandler}
        />
      </div>
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};

export default ProjectForm;
