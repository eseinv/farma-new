import styled from "styled-components";

export const GalleryWrapper = styled.div`
  background-color: #fff;
  color: rgb(98, 83, 75);
`;

export const EachArticleWrapper = styled.div`
  &:hover {
    cursor: pointer;
    background: #f6f8f8;
    box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const H1 = styled.h1`
  font-size: 1.5em;
  padding-left: 1em;
  padding-top: 2em;
  font-weight: 300;
  color: rgb(98, 83, 75);
`;
