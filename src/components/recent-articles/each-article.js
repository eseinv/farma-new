import React from "react";
import { EachArticleWrapper } from "./style";

const maxInfoChars = 123;

export const EachArticle = props => {
  const { article } = props;
  const { name, info, image } = article[0];

  return (
    <EachArticleWrapper className="col-lg-3 col-md-4 col-sm-12 text-left px-5 py-2">
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
    </EachArticleWrapper>
  );
};
