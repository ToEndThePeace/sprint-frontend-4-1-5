import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 32.3333%;
  margin-right: 1%;
  margin-bottom: 2vh;
  border: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  .top {
    background: #451015;
    color: white;
    padding: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      label {
        font-weight: 600;
        display: flex;
        align-items: center;
        &.complete {
          text-decoration: line-through;
          text-decoration-color: blue;
          text-decoration-style: solid;
        }
        input {
          margin-right: 20px;
        }
      }
    }
    p {
    }
  }
  ul {
    flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    img {
      height: 20px;
      margin-left: 10px;
    }
  }
`;

const ProjectCard = (props) => {
  const {
    project: { id, name, description, completed },
    actions,
    removeProject,
    openEditor,
    toggleComplete,
  } = props;
  const removeHandler = (e) => {
    e.preventDefault();
    removeProject(id);
  };
  const editHandler = (e) => {
    e.preventDefault();
    openEditor(props.project);
  };
  return (
    <StyledCard>
      <div className="top">
        <h3>
          <label className={`check${completed ? " complete" : ""}`}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleComplete(id)}
            />
            {name}
          </label>
        </h3>
      </div>
      <ul>
        <p>{description}</p>
        {/* {actions.length !== 0
          ? actions.map((x) => <li>{x.notes}</li>)
          : "No actions yet..."} */}
      </ul>

      <span className="close">
        <img
          src={require("../assets/pencil.png")}
          onClick={editHandler}
          alt=""
        />
        <img
          src={require("../assets/close.png")}
          onClick={removeHandler}
          alt=""
        />
      </span>
    </StyledCard>
  );
};

export default ProjectCard;
