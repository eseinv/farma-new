import React from "react";
import { EachProductWrapper } from "./style";

const maxInfoChars = 123;

export const EachProduct = props => {
  const { product } = props;
  const { name, info, image } = product;

  return (
    <EachProductWrapper className="col-lg-4 col-md-6 col-sm-12 text-left px-5 py-2">
      <img className="img-fluid mb-1 " src={image} alt={name} />
      <h3>{name}</h3>
      <p className="text-justify">
        {info.length > maxInfoChars ? (
          <span>
            {info.substring(0, maxInfoChars)}
            <b>....</b>
          </span>
        ) : (
          info
        )}
      </p>
    </EachProductWrapper>
  );
};
