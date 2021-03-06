import React from "react";
import styled from "styled-components";
import { lightRed, midOcean } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";

const NavbarStyled = styled.header`
  position: relative;
  z-index: -100;
  background-color: ${lightRed};
  padding: 10px 30px; */
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
