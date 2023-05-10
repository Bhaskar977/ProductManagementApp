import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import EditProduct from './EditProduct';
import Login from './Login';
import Products from './Products';
import SingleProduct from './SingleProduct';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/products/:id" element={
          <PrivateRoute>
            <SingleProduct/>
          </PrivateRoute>
        }/>
        <Route path='/products/:id/edit' element={
          <PrivateRoute>
            <EditProduct/>
          </PrivateRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  );
}

export default MainRoutes;
