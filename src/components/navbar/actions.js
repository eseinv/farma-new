import React from "react";
import { page } from "../../data/";
import { Ul, Li } from "./style";

export const Actions = props => (
  <Ul className="mr-2">
    {props.logged ? (
      <>
        <Li to="menu" active={page === "/menu" ? "true" : "false"}>
          Μενού
        </Li>
        <Li to="cart" active={page === "/cart" ? "true" : "false"}>
          Καλάθι
        </Li>
      </>
    ) : (
      <Li to="login">Είσοδος</Li>
    )}
  </Ul>
);
