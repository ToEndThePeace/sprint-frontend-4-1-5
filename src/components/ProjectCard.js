import React from "react";
import styled from "styled-components";

const StyledCard = styled.div``;

const ProjectCard = (props) => {
  const {
    project: { id, name, description, completed },
    actions,
  } = props;
  return (
    <StyledCard>
      <h3>{`${id}. ${name}`}</h3>
      <p>{!completed && "Not "}Completed</p>
      <p>{description}</p>
      <ul>
        {actions && actions.map(x => <li>{x.notes}</li>)}
      </ul>
    </StyledCard>
  );
};

export default ProjectCard