import React from "react";
import styled from "styled-components";
import { lightRed, midOcean } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";

const NavbarStyled = styled.header`
  background-color: ${lightRed};
  position: fixed;
  width: 60%;
  padding: 10px 20px;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${midOcean};
`;

export function Header() {
  return (
    <NavbarStyled>
      <HeaderLogo>Octopolis</HeaderLogo>
    </NavbarStyled>
  );
}
