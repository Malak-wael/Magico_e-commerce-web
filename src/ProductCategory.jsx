import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductCategory() {
  const { category } = useParams()
  const [productCat, setProductCat] = useState([])
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setProductCat(response.data))
  }, [category])
  return (
    <div>
      {productCat ? <div className="container">
        <h1 className='text-info text-center'>All Product</h1>
        <div className="row">
          {productCat.map((product) => {
            return (
              <div className="col-md-3">
                <div className="card m-2 p-2">
                  <img className="card-img-top" src={product.image} height={"300px"} alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">{product.title.substring(0, 10)}</h4>
                    <p className="card-text">{product.price}</p>
                  </div>
                  <Link className="btn btn-info text-light" to={`/ProductDetails/${product.id}`}>learn more</Link>
                </div>
              </div>
              // <Product product={product} />
            )
          })}

        </div>
      </div> :
        <div className='text-center'>
          <ClipLoader color='aqua' />
        </div>}
    </div>
  )
}
