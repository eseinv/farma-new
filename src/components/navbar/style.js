import styled from "styled-components";
import { Link } from "react-router-dom";

const active = "#62534b";
const inactive = "#62534bd9";

export const Logo = styled.img`
  max-width: 35%;
  @media only screen and (max-width: 550px) {
    max-width: 55%;
  }
`;

export const NavBarWrapper = styled.div`
  height: 80px;
  padding-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    height: 60px;
  }
  @media only screen and (max-width: 767px) {
    height: 45px;
    position: fixed;
    z-index: 999;
    background: #fff;
    padding-bottom: 1em;
  }
`;

export const Ul = styled.ul`
  display: inline-block;
  color: rgb(98, 83, 75);
  margin-top: 2em;
  font-size: 1.25em;
  @media only screen and (max-width: 1130px) {
    display: none;
  }
`;

export const Li = styled(Link)`
  list-style-type: none;
  display: inline-block;
  margin-left: 1em;
  margin-right: 1em;
  position: relative;
  color: ${props => (props.active === "true" ? active : inactive)};
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    opacity: ${props => (props.active === "true" ? 1 : 0)};
    background: #62534b;
    transition: opacity 0.2s ease;
  }
  &:hover {
    color: #62534b;
    text-decoration: none;
  }
  &:focus {
    box-shadow: none;
  }
`;

export const MenuWrapper = styled.div`
  padding-right: 1em;
  @media only screen and (min-width: 1131px) {
    display: none;
  }
`;
