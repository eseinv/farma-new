import React from "react";
import { page } from "../../data/";
import { Ul, Li } from "./style";

export const Navigation = () => (
  <Ul>
    <Li to="/" active={page === "/" ? "true" : "false"}>
      Αρχική
    </Li>
    <Li to="products" active={page === "/products" ? "true" : "false"}>
      Προϊόντα
    </Li>
    <Li to="about" active={page.includes("/about") ? "true" : "false"}>
      Η Φάρμα
    </Li>
    <Li to="contact" active={page.includes("/contact") ? "true" : "false"}>
      Επικοινωνία
    </Li>
  </Ul>
);
