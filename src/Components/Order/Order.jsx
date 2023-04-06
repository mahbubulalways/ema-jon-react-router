
import React from 'react';
import { BeakerIcon,TrashIcon,ArrowRightIcon } from '@heroicons/react/24/solid'

const Order = (props) => {

    // const cart=props.cart
    const {cart,handleClear,children}=props
  


    let total=0 
    let shipping=0
    let quantity=0
for(const singleCard of cart){
    // singleCard.quantity=singleCard.quantity || 1
    
    quantity=quantity+singleCard.quantity
    total=total+singleCard.price*quantity
    shipping= shipping + singleCard.shipping
 
}
const tax=total*5/100
const grandTotal=total+tax+shipping

    return (
        <div className=' bg-gray-700 text-white px-2 sticky top-0 py-24 rounded-md'>
            <h1 className='text-3xl font-semibold  text-center'>Order Summary</h1>
            <div className='space-y-5'>
                <h1 className='text-2xl font-semibold mt-10'>Selected Items: {quantity}</h1>
                <p className='text-lg'>Total Price: ${total}</p>
                <p className='text-lg'>Total Shipping Charge: ${shipping}</p>
                <p className='text-lg'>Tax: ${tax.toFixed(2)} </p>
                <p className='text-2xl font-bold'>Grand Total: ${grandTotal.toFixed(2)} </p>
                <div className='text-center'>
                
                <button onClick={handleClear}
                
                className='flex justify-center items-center gap-2  text-lg bg-red-600 px-3 py-1 rounded-md w-full mb-4'>
                 <div>Clear Cart</div>
                <div>
                <TrashIcon className="h-6 w-6 text-black-500" />
                </div>
                </button>
                <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Order;