import { getShoppingCart } from "../../utilities/fakedb"

const productLoader=async()=>{
    const  loadProduct=await fetch('products.json')
    const product =await loadProduct.json()
    // console.log(product);
    const storedCart=getShoppingCart()
    // console.log(storedCart);
    let saveCard=[]
    for(const id in storedCart){
        const addedProduct=product.find(pd=>pd.id===id)
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity
            saveCard.push(addedProduct)
        }
    }
    return saveCard

}
export default productLoader