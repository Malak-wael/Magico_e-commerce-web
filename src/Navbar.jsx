import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import App from './App'
import { CounterContext } from './ProviderCounter'

export default function Navbar() {
    const { count } = useContext(CounterContext)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) => setCategories(response.data))
    }, [])

    return (
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div className="container">
                <Link className="navbar-brand text-primary fw-bold" to={""}>MagicoStore</Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"#"} aria-current="page"
                            >Home
                                <span className="visually-hidden">(current)</span></Link
                            >
                        </li>
                        {categories.map((category) => {
                            return (

                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`/ProductCategory/${category}`}>{category}</NavLink>
                                </li>
                            )
                        })}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to={"#"}
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >Dropdown</Link
                            >
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <Link className="dropdown-item" to={"#"}
                                >Action 1</Link
                                >
                                <Link className="dropdown-item" to={"#"}
                                >Action 2</Link
                                >
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-outline-info my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <button type="button" className="btn  position-relative">
                    🛒
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {count}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>

    )
}
