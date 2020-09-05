import React from "react";
import { BrandLogo } from "./brand-logo";
import { Navigation } from "./navigation";
import { Actions } from "./actions";
import { Menu } from "../../icons/menu";
import { NavBarWrapper, MenuWrapper } from "./style";

export const NavBar = () => (
  <NavBarWrapper>
    <BrandLogo />
    <Navigation />
    <Actions logged={true} />
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
  </NavBarWrapper>
);
