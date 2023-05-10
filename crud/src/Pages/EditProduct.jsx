import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProduct, getProducts } from '../Redux/Products/action';


const EditProduct = () => {
  const {id} = useParams();
  const [title,setTitle] = useState("")
  const [category,setCategory] = useState("")
  const products = useSelector((store) => store.productReducer.products)
  const dispatch = useDispatch();


  useEffect(() => {
    const productData = products.find((el)=>el.id === id)
    if(productData){
      setTitle(productData.title)
      setCategory(productData.category)
    }
    
  }, []);

  const handleEdit = () =>{
    let newData = {
      category,
      product_name:title,
    }
    dispatch(editProduct(id,newData)).then(()=>dispatch(getProducts()));
  }

  return (
    <div>
      <h1>Edit Product Id : {id}</h1>
      <div>
      <label>Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div>
      <label>Category</label>
      <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
      </div>
      <button onClick={handleEdit}>Submit</button>
    </div>
  );
}

export default EditProduct;
