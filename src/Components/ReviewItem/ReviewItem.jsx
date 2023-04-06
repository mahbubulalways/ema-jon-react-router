import React from 'react';
import { BeakerIcon,TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = (props) => {
    const {img,name,id,price,shipping}=props.product
    // console.log(props);
    return (
        <div  className=' w-full md:w-3/4 border px-2 py-1 mt-5 flex justify-between shadow-md items-center'>
            <div className='flex gap-5 items-center'>
            <img className='w-28 rounded-md' src={img} alt="" />
           <div>
            <h1 className='text-lg font-semibold'>{name}</h1>
            <p className='text-lg'>Price: <span className='text-yellow-400 '>{price}</span></p>
            <p>Shipping Charge : {shipping}</p>
           </div>
         
        </div>
       <button onClick={()=>props.handleRemove(id)}>
       <div className='bg-red-200 p-4 rounded-full mr-5'>
         <TrashIcon className="h-12 w-12 text-red-500" />
         </div>
       </button>
        </div>
    );
};

export default ReviewItem;