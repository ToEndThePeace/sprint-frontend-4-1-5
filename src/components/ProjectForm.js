import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px 10%;
  legend {
    font-size: 2rem;
    font-weight: 700;
    text-decoration: underline;
    margin-bottom: 25px;
  }
  & > div {
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    label {
      width: 20%;
    }
    input, textarea {
      flex-grow: 1;
      border: 1px solid #451015;
      border-radius: 5px;
      padding: 10px;
      &.desc {
        height: 10vh;
      }
      &[type="submit"] {
        margin: 0 0 0 auto;
        flex-grow: 0;
        padding: 10px 30px;
        background-color: #451015;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
        &:hover {
          background-color: #562126;
        }
      }
    }
  }
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
        <textarea
          name="description"
          className="desc"
          value={newProject.description}
          onChange={inputHandler}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </StyledForm>
  );
};

export default ProjectForm;
