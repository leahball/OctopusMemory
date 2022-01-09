import React from "react";
import styled from "styled-components";
import { lightRed, midOcean, darkOcean, darkInk } from "../Theme/Colors";

const StartContentMain = styled.div`
  height: 670px;
  background-image: url("Assets/Images/Closeup.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
  position: relative;
  z-index: 10;
  top: -550px;
  @media only screen and (max-width: 420px) {
    height: 800px;
    top: -680px;
    right: -80px;
  }
  @media only screen and (max-width: 800px) {
    /* height: 740px; */
    background-size: 70%;
  }
`;

const SideBar = styled.div`
  position: relative;
  z-index: 30;
  width: 38%;
  margin-left: 10%;
  padding-top: 5%;
  text-align: right;
  h2 {
    font-size: 3rem;
    line-height: 1.5;
    color: ${darkInk};
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10%;
    background-color: rgba(254, 242, 239, 0.75);
    border-radius: 20px;
    padding: 4%;
  }
  @media only screen and (max-width: 420px) {
    padding-top: 10%;
    width: 80%;
    position: relative;
    z-index: 30;
    text-align: left;
    h2 {
      font-size: 2.8rem;
      z-index: 1;
    }
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
  a:hover {
    background-color: ${darkOcean};
  }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${lightRed};
  height: 580px;
  @media only screen and (max-width: 420px) {
    height: 800px;
  }
  @media only screen and (max-width: 800px) {
    height: 800px;
  }
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
