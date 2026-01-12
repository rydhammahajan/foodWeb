import { createContext } from "react";


const cartContext = createContext({
  cartItems: {},
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  clearCart : ()=>{}

}); 

export default cartContext ; 


// your Cart Context can expose:

// cartItems

// addItem()

// removeItem()

// increment()

// decrement()