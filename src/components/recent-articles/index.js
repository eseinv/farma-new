import React from "react";
import { EachArticle } from "./each-article";
import { articles } from "../../data/";
import { GalleryWrapper, H1 } from "./style";

class RecentArticles extends React.Component {
  render() {
    const recentArticles = [];
    for (let i = 0; i < 4; i++) {
      recentArticles.push(
        articles.splice(Math.floor(Math.random() * articles.length), 1)
      );
    }
    return (
      <>
        <H1>Πρόσφατα άρθρα</H1>
        <GalleryWrapper className="row">
          {recentArticles.map(article => (
            <EachArticle key={article[0].id} article={article} />
          ))}
        </GalleryWrapper>
      </>
    );
  }
}

export default RecentArticles;
