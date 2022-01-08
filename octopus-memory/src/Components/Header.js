import React from "react";
import styled from "styled-components";
import { lightRed, midOcean } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";

const NavbarStyled = styled.header`
  background-color: ${lightRed};
  position: fixed;
  width: 60%;
  padding: 10px 30px;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${midOcean};
  font-size: 5rem;
`;

export function Header() {
  return (
    <NavbarStyled>
      <HeaderLogo>Octopolis</HeaderLogo>
    </NavbarStyled>
  );
}
