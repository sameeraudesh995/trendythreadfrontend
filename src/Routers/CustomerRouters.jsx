import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from "../customer/components/Cart/Cart";
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';


const CustomerRouters = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo:/lavelThre' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>

            
        </Routes>
    </div>
  )
}

export default CustomerRouters

 {/* <HomePage/> */}
   {/* <Product/> */}
   {/* <ProductDetails/>
     */}
     {/* <Cart/> */}
     {/* <Checkout/> */}
     {/* <Order/> */}
     {/* <OrderDetails/> */}