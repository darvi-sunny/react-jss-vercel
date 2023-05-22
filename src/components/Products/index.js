import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
const Products = (props) => {
  const { product_list } = props.fields;
  console.log(product_list);
  return (
    <div className="allproducts">
      {product_list.map((listitem, index) => (
        <article key={index} className="product">
          <div className="productimage">
            <Image field={listitem.fields.image.value} />
          </div>
          <div>
            <h3>{listitem.fields.title.value}</h3>
            <p>INR {listitem.fields.price.value}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
