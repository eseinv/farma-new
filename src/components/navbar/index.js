import React from "react";
import { BrandLogo } from "./brand-logo";
import { Navigation } from "./navigation";
import { Actions } from "./actions";
import { NavBarWrapper } from "./style";

export const NavBar = () => (
  <NavBarWrapper>
    <BrandLogo />
    <Navigation />
    <Actions />
  </NavBarWrapper>
);
