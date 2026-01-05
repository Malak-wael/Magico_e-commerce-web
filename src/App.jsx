import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { Helmet } from 'react-helmet';
import { ClipLoader } from 'react-spinners';
export default function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, [])
  console.log(products)

  return (
    <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
    {products?<div className="container">
      <h1 className='text-info text-center'>All Product</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <Product product={product} />
          )
        })}
       
      </div>
    </div>:
    <div className='text-center'>
    <ClipLoader color='aqua'/>
    </div> }
    
   
    </>
  )
}
