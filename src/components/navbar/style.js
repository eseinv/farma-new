import styled from "styled-components";
import { Link } from "react-router-dom";

const active = "#62534b";
const inactive = "#62534bd9";

export const Logo = styled.img`
  max-width: 30%;
`;

export const NavBarWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #62534bd9;
`;

export const Ul = styled.ul`
  display: inline-block;
  color: rgb(98, 83, 75);
  margin-top: 2em;
  font-size: 1.25em;
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
