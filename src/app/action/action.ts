
import { Products } from './../../../type/product';

export const addToCart = (Product: Products) => {
    const cart: Products[] = JSON.parse(localStorage.getItem(`cart`) || `[]`)
    const existingProductIndex = cart.findIndex(item => item._id === Product._id)
    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...Product, inventory: 1
        })
    }
    localStorage.setItem(`cart`, JSON.stringify(cart))
}
export const removeFromCart = (productId: string) => {
    let cart: Products[] = JSON.parse(localStorage.getItem(`cart`) || `[]`)
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem(`cart`, JSON.stringify(cart))
}
export const updateCartQuantity = (productId: string,quantity:number) => {
    const cart: Products[] = JSON.parse(localStorage.getItem(`cart`) || `[]`)
  const productIndex = cart.findIndex(item=>item._id === productId)
if(productIndex >-1){
    cart[productIndex].inventory = quantity
}
}
export const getCartItems=(): Products[]=>{
    return JSON.parse(localStorage.getItem(`cart`)|| `[]`)
}