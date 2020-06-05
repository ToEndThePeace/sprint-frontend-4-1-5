import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Projects, Actions } from "./utils";
import ProjectList from "./components/ProjectList";

const StyledApp = styled.div`
  padding: 50px;
`;

function App() {
  const [projects, setProjects] = useState(null);
  const [actions, setActions] = useState(null);

  useEffect(() => {
    Projects.fetch()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
    Actions.fetch()
      .then((res) => {
        setActions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <StyledApp className="App">
      <Header />
      <ProjectList projects={projects} actions={actions} />
    </StyledApp>
  );
}

export default App;
