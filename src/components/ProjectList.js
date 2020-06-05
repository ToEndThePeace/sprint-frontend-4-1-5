import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledList = styled.div``;

const ProjectList = (props) => {
  const { projects, actions } = props;
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
              />
            );
          })}
      </div>
    </StyledList>
  );
};

export default ProjectList;
