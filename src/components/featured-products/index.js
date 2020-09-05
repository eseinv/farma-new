import React from "react";
import { EachProduct } from "./each-product";
import { products } from "../../data/";
import { GalleryWrapper, H1 } from "./style";

class FeaturedProducts extends React.Component {
  render() {
    const featuredProducts = [];
    for (let i = 0; i < 2; i++) {
      featuredProducts.push(
        products.splice(Math.floor(Math.random() * products.length), 1)
      );
    }
    return (
      <>
        <H1>Προτεινόμενα προϊόντα</H1>
        <GalleryWrapper className="row">
          {products.map(product => (
            <EachProduct key={product.id} product={product} />
          ))}
        </GalleryWrapper>
      </>
    );
  }
}

export default FeaturedProducts;
