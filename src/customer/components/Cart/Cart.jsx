import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'

const Cart = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative '>
        <div className='col-span-2 '>
          {[1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />
          <div className='space-y-3 font-semibold mb-10'>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span>LKR4567</span>

            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Discount</span>
              <span className='text-green-600'>-LKR2456</span>

            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Delivery Charge</span>
              <span className='text-green-600'>free</span>

            </div>
            <div className='flex justify-between pt-3 text-black font-bold'>
              <span>Total Amount</span>
              <span className='text-green-600 font-bold'>LKR1111</span>

            </div>

          </div>
          <Button
                  variant="contained"
                  type="submit"
                  className='w-full mt-5'
                  sx={{   bgcolor:"#9155fd", px:"2.5rem", py:".7rem" }}
                >
                 Checkout
                </Button>
        </div>

      </div>
      </div>
     

       
    </div>
  )
}

export default Cart