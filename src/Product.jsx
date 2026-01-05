import React from 'react'
import { Link } from 'react-router-dom'
export default function Product({ product }) {
  return (
    <div className="col-md-3">
      <div className="card m-2 p-2">
        <img className="card-img-top" src={product.image} height={"300px"} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{product.title.substring(0,10)}</h4>
          <p className="card-text">{product.price}</p>
        </div>
          <Link className="btn btn-info text-light" to={`/ProductDetails/${product.id}`}>learn more</Link>
      </div>
    </div>
  )
}
