import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledList = styled.div`
  padding: 20px 10%;
  h2 {
    font-size: 2rem;
    text-decoration: underline;
    margin-bottom: 15px;
    color: black;
  }
  & > div {
    display: flex;
    flex-flow: row wrap;
  }
`;

const ProjectList = (props) => {
  const {
    projects,
    actions,
    removeProject,
    openEditor,
    toggleComplete,
  } = props;
  return (
    <StyledList>
      <h2>Projects:</h2>
      <div>
        {projects &&
          actions &&
          projects.map((x) => {
            return (
              <ProjectCard
                key={x.id}
                project={x}
                actions={actions.filter((y) => y.project_id === x.id)}
                removeProject={removeProject}
                openEditor={openEditor}
                toggleComplete={toggleComplete}
              />
            );
          })}
      </div>
    </StyledList>
  );
};

export default ProjectList;
