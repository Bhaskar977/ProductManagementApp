import React from 'react';
import Navbar from '../Components/Navbar';
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
import styles from "../Styles/Product.module.css"

const Products = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles["product-filter-container"]}>
        <div>
        <Sidebar/>
        </div>
        <div className={styles["product-list"]}>
        <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default Products;
