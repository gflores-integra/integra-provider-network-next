import styled, { keyframes } from "styled-components";
import Link from "next/link";

const lineAnimation = keyframes`
  to {
    width: 100%;
  }
`;

const AnimatedLine = styled.div`
  width: 0;
  height: 3px;
  background-color: #02afff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const NavLinkWrapper = styled.div`
  border: none;
  padding: 6px 0;
  width: 100%;
  height: 50%;
  position: relative;
  text-decoration: none;

  &:hover ${AnimatedLine} {
    animation: ${lineAnimation} 0.3s forwards;
    text-decoration: none;
    color: #02afff;
  }
`;

const NavLink = styled(Link)`
  font-size: 14px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-style: normal;
  display: block;
  text-decoration: none;
  color: #026e9f;

  &:hover {
    color: #02afff;
  }
`;

const NavText = styled.span`
  &:hover ${AnimatedLine} {
    color: #02afff;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 80%;
  left: 0;
  background: white;
  color: #03a9f4;
  z-index: 2;
  text-decoration: none;
  width: 250px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.04);
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 13px 7px;
  text-decoration: none;
  color: #333;
  background-color: linear-gradient(to left, #1a75e8, #03a9f4);
  width: 100%;

  font-size: 14px;
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-style: normal;
  text-decoration: none;
  display: flex;
  padding-left: 7%;
  border: 0.5px solid #d3d3d3;

  &:hover {
    background-color: #03a9f4;
    color: white;
    text-decoration: none;
  }
`;

const Services = styled.div`
  position: relative;
  cursor: pointer;
  padding: 15px 0;
  width: 100%;
  height: 100%;
  color: #026e9f;
  text-decoration: none;

  &:hover ${Dropdown} {
    display: block;
  }

  &:hover {
    position: relative;
    text-decoration: none;
    color: #02afff;
  }
`;

const ServicesDesktopLink = styled(Link)`
  align-content: center;
  align-items: center;
  color: #026e9f;
  display: flex;
  height: 100%;
  justify-content: center;

  font-size: 14px;
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-style: normal;
  text-decoration: none;
  width: 100%;
  position: relative;
  text-decoration: none;
  padding: 6px 0;
  color: #026e9f;

  &:hover {
    color: #02afff;
  }
  &:hover ${AnimatedLine} {
    animation: ${lineAnimation} 0.3s forwards;
    text-decoration: none;
    color: #02afff;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  font-size: 0.7em;
  margin-left: 4px;

  .active & {
    transform: rotate(180deg);
  }
`;

export {
  AnimatedLine,
  Arrow,
  Container,
  Dropdown,
  DropdownLink,
  NavLink,
  NavLinkWrapper,
  NavText,
  Services,
  ServicesDesktopLink,
};
