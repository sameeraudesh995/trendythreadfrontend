import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from "../customer/components/Cart/Cart";
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Navigation from '../customer/components/Navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import Checkout from '../customer/components/checkout/Checkout';
import Order from '../customer/components/Order/Order';


const CustomerRouters = () => {
  return (
    <div>
        <div>
       
      <Navigation/>
      
        </div>
        <Routes>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order:orderId' element={<Order/>}></Route>

            
        </Routes>
        <div>
        <Footer/>
        </div>
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