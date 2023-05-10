import React, { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
   const [searchParams,setSearchParams] = useSearchParams();
   const initialState = searchParams.getAll("category")
   const initialOrder = searchParams.get("order")
   const [category,setCategory] = useState(initialState||[])
   const [order,setOrder] = useState(initialOrder||"")
  //  console.log(order)


   const handleFilter = (e) =>{
    let newCategory = [...category]
      // If a user changes any category it should be stored in state.
      // If the category is already present pop out of the state.
      if(newCategory.includes(e.target.value)){
          //filter
          //splice
        newCategory.splice(newCategory.indexOf(e.target.value),1)
      }else{
        newCategory.push(e.target.value)
      }
      setCategory(newCategory);
   }
   const handleSort = (e) =>{
    setOrder(e.target.value)
   }
   useEffect(() => {
     const params = {
        category
     }
     order && (params.order = order)
     setSearchParams(params)
   }, [category,order]);

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" value="men's clothing" onChange={handleFilter} checked={category.includes("men's clothing")}/>
        <label>men's clothing</label>
      </div>
      <div>
        <input type="checkbox" value="jewelery" onChange={handleFilter} checked={category.includes("jewelery")}/>
        <label>jewelery</label>
      </div>
      <div>
        <input type="checkbox" value="electronics"  onChange={handleFilter} checked={category.includes("electronics")}/>
        <label>electronics</label>
      </div>
      <div>
        <input type="checkbox" value="women's clothing" onChange={handleFilter} checked={category.includes("women's clothing")}/>
        <label>women's clothing</label>
      </div>
      <h3>Sort By Order</h3>
      <div onChange={handleSort}>
        <input type="radio" name='sort_by' value={"asc"}/>
        <label>Ascending</label>
        <input type="radio" name='sort_by' value={"desc"}/>
        <label>Descending</label>
      </div>
    </div>
  );
}

export default Sidebar;
