import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Order from '../Order/Order';
import './Shop.css'
import { Link } from 'react-router-dom';
import {ArrowRightIcon } from '@heroicons/react/24/solid'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect( ()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        // console.log(products);
      const storedCart=  getShoppingCart()
      const saveCart=[]
    //   get id
       for( const id in storedCart){
        // get product by using id
        
        const addedProduct=products.find(product=>product.id===id)
      
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity
            saveCart.push(addedProduct)
        }
        // get quantity of the product
        
       }
       setCart(saveCart)
    },[products])



    const hendlerAdd=(product)=>{
        let newCart =[]
        const exits=cart.find(pd=>pd.id===product.id)
        if(!exits){
            product.quantity=1
            newCart=[...cart,product]
        }
        else{
            product.quantity=product.quantity+1
            const remaining=cart.filter(pd=>pd.id!=product.id)
            newCart=[...remaining,exits]
        }
  
        setCart(newCart)
        addToDb(product.id)

    }
    const handleClear=()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='w-[90%] mx-auto gap-5 flex justify-between flex-col md:flex-row'>
          
                <div className='w-full  grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                 {products.map(product=><Card
                 product={product}
                 key={product.id}
                 hendlerAdd={hendlerAdd}

                 >
               
                 </Card>)}
            </div>
            <div className=' w-full md:w-1/3 mt-10 '>
                   
                <Order
                handleClear={handleClear}
                cart={cart}>

                 <div className=' text-lg bg-yellow-600 px-3 py-1 rounded-md w-full'>
                       < Link className='flex gap-2 items-center justify-center' to='/review'>
                        <button className=''>Review Order</button>
                        <ArrowRightIcon className="h-6 w-6 text-black-500" />
                        </Link>
                   </div>
                </Order>

            
            </div>
        </div>
    );
};

export default Shop;