import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../Redux/Products/action';
import ProductCard from './ProductCard';
import styles from "../Styles/ProductList.module.css"
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store)=>store.productReducer.products)
    const location = useLocation();
    const [searchParams] = useSearchParams()
    

    useEffect(() => {
      const order = searchParams.get("order")
      let paramObj = {
        params:{
          category:searchParams.getAll("category"),
          _sort:order && "price",
          _order:order,
        }
      }
      dispatch(getProducts(paramObj))
    }, [location.search]);

  return (
    <DIVWrapper className={styles.container}>
      {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
      })}
    </DIVWrapper>
  );
}

const DIVWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
    grid-gap:10px;
`

export default ProductList;
