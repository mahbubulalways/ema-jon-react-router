import React from 'react';
import { BeakerIcon,ShoppingCartIcon } from '@heroicons/react/24/solid'

const Card = (props) => {
   
    const {img,name,price,ratings,seller,}=props.product
  const hendlerAdd=props.hendlerAdd
    return ( 
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl border border-gray-400">
  <figure><img className='p-2 rounded-2xl' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <div>
    <h1 className="card-title">{name}</h1>
    <h4 className='text-xl font-semibold'>Price: ${price}</h4>
    </div>
    <div className='mt-10'>
        <h1  className='text-lg font-semibold'>Manufacturer: {seller}</h1>
        <h1  className='text-lg font-semibold'>Rating: {ratings} stars</h1>
    </div>
    
  </div>
  <button onClick={()=>hendlerAdd(props.product)}>
  <div className='flex gap-3 border-t-1 rounded-br-xl rounded-bl-xl border-gray-400 bg-gray-700 hover:bg-gray-800 text-white justify-center items-center  w-full '>
      <div>
      <button className="w-full rounded-sm py-2 font-semibold">Add to Cart
      </button>
      </div>
     <div>
     <ShoppingCartIcon className="h-6 w-6 text-white" />
     </div>

    </div>
  </button>
</div>
        </div>
    );
};

export default Card;