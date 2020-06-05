import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Switch, Route, useHistory } from "react-router-dom";
import { Projects, Actions } from "./utils";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import EditForm from "./components/EditForm";

const StyledApp = styled.div`
  height: 100%;
  font-family: "Open Sans", sans-serif;
`;

const initialValues = {
  name: "",
  description: "",
};

function App() {
  const { push } = useHistory();
  const [projects, setProjects] = useState(null);
  const [actions, setActions] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editorValues, setEditorValues] = useState(initialValues);

  const addProject = (newProj) => {
    Projects.post(newProj)
      .then((res) => {
        console.log(res);
        setProjects([...projects, res.data]);
        push("/projects");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeProject = (id) => {
    Projects.remove(id)
      .then((res) => {
        console.log(res);
        setProjects(projects.filter((x) => x.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateProject = (id, changes) => {
    Projects.update(id, changes).then((res) => {
      console.log(res);
      setProjects(
        projects.map((x) => (x.id === id ? { ...x, ...changes } : x))
      );
    });
  };
  const openEditor = (project) => {
    setEditing(true);
    setEditorValues(project);
  };
  const closeEditor = () => {
    setEditing(false);
    setEditorValues(initialValues);
  };
  const toggleComplete = (id) => {
    projects.forEach((proj) => {
      if (id === proj.id) {
        updateProject(id, { completed: !proj.completed });
      }
    });
  };
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
      {editing && (
        <EditForm
          values={editorValues}
          closeEditor={closeEditor}
          updateProject={updateProject}
        />
      )}
      <Switch>
        <Route
          exact
          path="/projects"
          render={() => {
            return (
              <ProjectList
                projects={projects}
                actions={actions}
                removeProject={removeProject}
                openEditor={openEditor}
                toggleComplete={toggleComplete}
              />
            );
          }}
        />
        <Route
          exact
          path="/projects/new"
          render={() => {
            return <ProjectForm addProject={addProject} />;
          }}
        />
        <Route
          path="/"
          render={() => {
            return (
              <ProjectList
                projects={projects}
                actions={actions}
                removeProject={removeProject}
                openEditor={openEditor}
                toggleComplete={toggleComplete}
              />
            );
          }}
        />
      </Switch>
    </StyledApp>
  );
}

export default App;
