import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
    <div style={{border:"1px solid gray"}}>
      <img src={product.image} alt="product-image" width="30%" />
      <h3>{product.title}</h3>
      <p><b>Category</b>:{product.category}</p>
      <p><b>Price</b>:{product.price}</p>
      <Link to={`/products/:${product.id}/edit`}>
      <button>Edit</button>
      </Link>
    </div>
    </Link>
  );
}

export default ProductCard;
