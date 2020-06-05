import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header``;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Project Manager</h1>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;