import React from "react";
import styled from "styled-components";
import { lightRed, midOcean, darkInk } from "../Theme/Colors";

const StartContentMain = styled.div`
  height: 800px;
  background-image: url("Assets/Images/Closeup.png");
  background-color: ${lightRed};
  background-size: cover;
  flex: 1;
  z-index: 1;
`;

const SideBar = styled.div`
  background-color: ${lightRed};
  flex: 0 auto;
  width: 48%;
  text-align: right;
  padding: 10% 0 0 15%;
  h2 {
    font-size: 3rem;
    line-height: 1.5;
    color: ${darkInk};
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10%;
  }
`;

const Button = styled.button`
  appearance: none;
  background-color: ${midOcean};
  color: white;
  padding: 3% 8%;
  margin: 2%;
  font-size: 3rem;
  font-family: "Rubik";
  font-weight: 700;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const GetStarted = () => {
  return (
    <Wrapper>
      <SideBar>
        <h2>
          An interactive game to learn about Octopuses and what they have to
          teach us about being human.
        </h2>
        <Button>Let's Go!</Button>
      </SideBar>
      <StartContentMain></StartContentMain>
    </Wrapper>
  );
};

export default GetStarted;
