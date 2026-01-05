import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails.jsx'
import Navbar from './Navbar.jsx'
import ProductCategory from './ProductCategory.jsx'
import ProviderCounter from './ProviderCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderCounter>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/ProductDetails/:id' element={<ProductDetails />} />
          <Route path='/ProductCategory/:category' element={<ProductCategory />} />

        </Routes>
      </BrowserRouter>
    </ProviderCounter>
  </StrictMode>,
)
