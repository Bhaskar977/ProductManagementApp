import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const SingleProduct = () => {
  let {id} = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const [product,setProduct] = useState({})
  
  useEffect(() => {
    let productData = products.find((el) => el.id === +id);
    productData && setProduct(productData)
  },[]);


  return (
    <div>
      single Product
      <ProductCard product={product} />
    </div>
  );
}

export default SingleProduct;
