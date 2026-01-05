import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CounterContext } from './ProviderCounter';

export default function ProductDetails() {
  const { increment } = useContext(CounterContext)
  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [show, setShow] = useState(true)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id])
  console.log(product)
  return (
    <>
      {/* <Helmet>
        <title>Product Details</title>
      </Helmet> */}
      <div className='container mt-3'>
        <div className="card p-2">
          <div className="row">
            <div className="col-md-6 ">
              <img src={product.image} height={"600px"} alt="Title" width={"100%"} />
            </div>
            <div className="col-md-6 mt-2">
              <h4 className="card-title">{product.title}</h4>
              <h3 className='fw-bold'>Type:</h3>
              <p className="text-muted">{product.category}</p>
              <h3 className='fw-bold'>Discription:</h3>
              <p>{product.description}</p>
              <h3 className='fw-bold'>Price:</h3>
              <p className="card-text">{product.price}</p>
              <button className='btn btn-outline-info text-center w-25 ' onClick={increment}> Add to cart</button>
              {/* <button className='btn btn-secondary' onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
              {show && <p>this visable</p>} */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
