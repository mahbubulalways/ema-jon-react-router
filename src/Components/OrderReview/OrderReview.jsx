import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';
import {CreditCardIcon } from '@heroicons/react/24/solid'


const OrderReview = () => {
    const savedCart=useLoaderData()
    const [cart,setCart]=useState(savedCart)
    console.log(cart);
    const handleRemove=(id)=>{
        console.log(id);
        const remaining=cart.filter(ct=>ct.id !== id)
        setCart(remaining)
        removeFromDb(id)
       
    }

    const handleClear=()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center pb-10'>
            <div className='w-full'>
               {
                cart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handleRemove={handleRemove}
                ></ReviewItem>)
               }
            </div>
             <div className='mt-10 w-full md:w-1/3  justify-end'>
                   
                  <div className=''>
                 <Order 
                 cart={cart}
                 handleClear={handleClear}
                 >
                   <div className='text-lg bg-yellow-600 px-3 py-1 rounded-md w-full'>
                   <Link className='flex justify-center gap-3 items-center' to='/cheek-out'>
                        <button className=''>Proceed Checkout</button>
                        <CreditCardIcon className="h-6 w-6 text-black-500" />
                        </Link>
                   </div>
                 </Order>
                  </div>
   
               
               </div>
        </div>
    );
};

export default OrderReview;