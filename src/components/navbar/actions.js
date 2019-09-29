import React from "react";
import { page } from "../../data/";
import { Ul, Li } from "./style";

export const Actions = () => (
  <Ul className="mr-2">
    <Li to="menu" active={page === "/menu" ? "true" : "false"}>
      Μενού
    </Li>
  </Ul>
);
