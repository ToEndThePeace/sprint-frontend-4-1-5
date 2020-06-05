import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #000b;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
    background-color: white;
    border: 1px solid black;
    box-shadow: 0 0 30px black;
    -moz-box-shadow: 0 0 10px 2px black;
    padding: 40px 30px 25px;
    width: 30%;
    border-radius: 10px;
    legend {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 1px solid #451015;
      color: #451015;
      width: 100%;
    }
    & > div {
      display: flex;
      flex-flow: row nowrap;
      &:not(:last-of-type) {
        padding: 0 15px;
        margin-bottom: 20px;
      }
      label {
        width: 30%;
        font-size: 1.2rem;
      }
      input,
      textarea {
        flex-grow: 1;
        border: 1px solid #451015;
        border-radius: 5px;
        font-family: "Open Sans", sans-serif;
        padding: 5px 10px;
        &:focus {
          background: #e9e9e9;
        }
        &.desc {
          height: 10vh;
          display: flex;
        }
        &[type="submit"] {
          flex-grow: 0;
          margin: 0 0 0 auto;
          padding: 10px 20px;
          font-weight: 600;
          color: white;
          border: none;
          background: #451015;
          font-size: 1rem;
          cursor: pointer;
          &:hover {
            background: #562126;
          }
        }
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 12px;
      color: black;
      cursor: pointer;
      font-size: 2rem;
      &:hover {
        text-shadow: 0 0 3px black;
      }
    }
  }
`;

const EditForm = (props) => {
  const { values, closeEditor, updateProject } = props;
  const [formData, setFormData] = useState(values);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { id, ...changes } = formData;
    updateProject(formData.id, changes);
    closeEditor();
  };
  const clickOut = (e) => {
    e.stopPropagation();
    closeEditor();
  };
  return (
    <StyledForm onSubmit={submitHandler} onClick={clickOut}>
      <div onClick={(e) => e.stopPropagation()}>
        <legend>Edit Project:&nbsp;</legend>
        <div>
          <label>Name:&nbsp;</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Description:&nbsp;</label>
          <textarea
            name="description"
            className="desc"
            value={formData.description}
            onChange={inputHandler}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
        <span className="close" onClick={closeEditor}>
          &times;
        </span>
      </div>
    </StyledForm>
  );
};

export default EditForm;
