import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #451015;
  color: white;
  padding: 15px 10%;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 7px;
  }
  nav {
    a {
      color: white;
      text-decoration: none;
      padding: 10px;
      font-weight: 600;
      &.active {
        text-decoration: underline;
      }
    }
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Project Manager</h1>
      <nav>
        <NavLink exact to="/projects">
          Projects
        </NavLink>
        <NavLink exact to="/projects/new">
          New Project
        </NavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
