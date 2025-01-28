// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Products } from "../../../type/product";
// import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
// import Swal from "sweetalert2";
// import { urlFor } from "@/sanity/lib/image";

// const CartsPage = () => {
//   const [cartItems, setCartItems] = useState<Products[]>([]);

//   useEffect(() => {
    
//     setCartItems(getCartItems()); // Default to an empty array if no items are present
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure you want to remove this item?",
//       text: "You won't be able to recover it!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3885d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire("Removed!", "The item has been removed.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//    // if (quantity < 1) return; // Prevent quantity from going below 1
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
//   };

//   const calculatedTotal = () => {
//     return cartItems
//       .reduce((total, item) => total + item.price * item.inventory, 0)
//       //.toFixed(2);
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to checkout",
//       text: "Please review your cart before checking out.",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3885d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Su'ccess", "Your order has been successfully processed.", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className= "min-h-screen bg-gray-100 p-6" >
//     <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md" >
//       <h1 className="text-2xl font-bold text-gray-800 mb-4" > Shopping Cart </h1>
//   {
//     cartItems.length === 0 ? (
//       <div className="lg:col-span-2">
//       {
//         cartItems.map((item) => (
//           <div
//                 key= { item._id }
//                 className = "flex items-center justify-between p-4 border-b border-gray-200"
//           >
//           <div className="flex items-center space-x-4" >
//         {
//           item.image && (
//             <Image
//                     //   src={ item.image }
//                     src={urlFor(item.image).url()}
//                       alt = { item.productName }
//                       className = "w-16 h-16 object-cover rounded-lg"
//                       width = { 500}
//                       height = {500}
//                       //quality = { 90}
//           />
//                   )
//       }
//       < div >
//       <h3 className= "text-lg font-semibold" > { item.productName } </h3>
//       < p className = "text-sm text-gray-500" > Price: ${ item.price } </p>
//         </div>
//         </div>
//         < div className = "flex items-center space-x-4" >
//           <button
//                     onClick={ () => handleDecrement(item._id) }
//     className = "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//       >
//       -
//       </button>
//       < span className = "text-lg" > { item.inventory } </span>
//         < button
//     onClick = {() => handleIncrement(item._id)}
// className = "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//   >
//   +
//   </button>
//   </div>
//   < div className = "flex items-center space-x-4" >
//     <p className="text-lg font-semibold" >
//       ${ (item.price * item.inventory).toFixed(2) }
// </p>
//   < button
// onClick = {() => handleRemove(item._id)}
// className = "text-red-500 hover:text-red-700"
//   >
//   Remove
//   </button>
//   </div>
//   </div>
//             ))}
// <div className="mt-4 flex justify-between items-center" >
//   <p className="text-lg font-bold" > Total: ${ calculatedTotal().toFixed(2) } </p>
//     < button
// onClick = { handleProceed }
// className = "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//   >
//   Proceed to Checkout
//     </button>
//     </div>
//     </div>
//         ) : (
//   <p className= "text-center text-gray-500" > Your cart is empty.</p>
//         )}
// </div>
//   </div>
//   );
// };

// export default CartsPage;

























"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Products } from "../../../type/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";

const CartsPage = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items || []); // Default to an empty array if no items are present
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to remove this item?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3885d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems() || []);
        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems() || []);
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before checking out.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3885d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded-lg"
                      width={64}
                      height={64}
                      quality={90}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-semibold">
                    ${(item.price * item.inventory).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">Total: ${calculatedTotal()}</p>
              <button
                onClick={handleProceed}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartsPage;
















//   return (
//     <div className= "min-h-screen bg-gray-100 p-6" >
//     <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md" >
//       <h1 className="text-2xl font-bold text-gray-800 mb-4" > Your Cart </h1>
//   {
//     cartItems.length > 0 ? (
//       <div>
//       {
//         cartItems.map((item) => (
//           <div
//                 key= { item._id }
//                 className = "flex items-center justify-between p-4 border-b border-gray-200"
//           >
//           <div className="flex items-center space-x-4" >
//         {
//           item.image && (
//             <Image
//                       src={ item.image }
//                       alt = { item.productName }
//                       className = "w-16 h-16 object-cover rounded-lg"
//                       width = { 64}
//                       height = { 64}
//                       quality = { 90}
//           />
//                   )
//       }
//       < div >
//       <h3 className= "text-lg font-semibold" > { item.productName } </h3>
//       < p className = "text-sm text-gray-500" > Price: ${ item.price } </p>
//         </div>
//         </div>
//         < div className = "flex items-center space-x-4" >
//           <button
//                     onClick={ () => handleDecrement(item._id) }
//     className = "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//       >
//       -
//       </button>
//       < span className = "text-lg" > { item.inventory } </span>
//         < button
//     onClick = {() => handleIncrement(item._id)}
// className = "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//   >
//   +
//   </button>
//   </div>
//   < div className = "flex items-center space-x-4" >
//     <p className="text-lg font-semibold" >
//       ${ (item.price * item.inventory).toFixed(2) }
// </p>
//   < button
// onClick = {() => handleRemove(item._id)}
// className = "text-red-500 hover:text-red-700"
//   >
//   Remove
//   </button>
//   </div>
//   </div>
//             ))}
// <div className="mt-4 flex justify-between items-center" >
//   <p className="text-lg font-bold" > Total: ${ calculatedTotal() } </p>
//     < button
// onClick = { handleProceed }
// className = "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//   >
//   Proceed to Checkout
//     </button>
//     </div>
//     </div>
//         ) : (
//   <p className= "text-center text-gray-500" > Your cart is empty.</p>
//         )}
// </div>
//   </div>

//   )


// export default CartsPage







// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image"; // Use Next.js Image component
// import { Products } from "../../../type/product"; // Ensure this type is properly defined
// import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
// import Swal from "sweetalert2";

// const CartsPage = () => {
//   const [cartItems, setCartItems] = useState<Products[]>([]);

//   useEffect(() => {
//     // Fetch cart items when the component mounts
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this item!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3885d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire("Removed!", "Item has been removed.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1){
//          handleQuantityChange(id, product.inventory - 1);
//   }};

//   const calculatedTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to checkout",
//       text: "Please review your cart before checkout.",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3885d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success", "Your order has been successfully processed.", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>
//         {cartItems.length > 0 ? (
//           <div>
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center justify-between p-4 border-b border-gray-200"
//               >
//                 <div className="flex items-center space-x-4">
//                   {item.image && (
//                     <Image
//                       src={item.image}
//                       alt={item.productName}
//                       className="w-16 h-16 object-cover rounded-lg"
//                       width={64}
//                       height={64}
//                       quality={90}
//                     />
//                   )}
//                   <div>
//                     <h3 className="text-lg font-semibold">{item.productName}</h3>
//                     <p className="text-sm text-gray-500">Price: ${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => handleDecrement(item._id)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{item.inventory}</span>
//                   <button
//                     onClick={() => handleIncrement(item._id)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-lg font-semibold">
//                     ${(item.price * item.inventory).toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-4 flex justify-between items-center">
//               <p className="text-lg font-bold">Total: ${calculatedTotal()}</p>
//               <button
//                 onClick={handleProceed}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartsPage;























// "use client"
// import React from "react"
// import { useEffect, useState } from "react"
// import { Products } from "../../../type/product"
// import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action"
// import { title } from "process"

// import { urlFor } from '../../sanity/lib/image';
// import { Swal } from 'sweetalert2';
// import { Result } from 'postcss';


// const cartsPage = () => {
//     const [cartItems, setCartItems] = useState<Products[]>([])
//     useEffect(() => {
//         setCartItems(getCartItems())
//     }, [])
//     const handleRemove = (id: string) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "you will not be able to recover this item!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3885d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "yes,remove it!",

//         }).then((Result) => {
//             if (Result.isConfirmed) {
//                 removeFromCart(id)
//                 setCartItems(getCartItems())
//                 Swal.fire("Removed!", "Item has removed.", "success");
//             }
//         })
//     }
//     const handleQuantityChange = (id: string, quantity: number) => {
//         updateCartQuantity(id, quantity);
//         setCartItems(getCartItems())
//     }
//     const handleIncrement = (id: string) => {
//         const product = cartItems.find((item) => item._id === id);
//         if (product)
//             handleQuantityChange(id, product.inventory + 1)
//     }

//     const handledecrement = (id: string) => {
//         const product = cartItems.find((item) => item._id === id);
//         if (product && product.inventory > 1)
//             handleQuantityChange(id, product.inventory - 1)
//     }

//     const calculatedTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
//     }

//     const handledProceed = () => {
//         Swal.fire({
//             title: "Proceed to checkout",
//             text: "please review your cart before checkout",
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonColor: "#3885d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "yes,proced!"
//         }).then((Result) => {
//             if (Result.isConfirmed) {
//                 Swal.fire("success", "your order has been succuessfully processed", "success")
//                 setCartItems([])
//             }

//         })
//     }
//     return (

//         <div className="">
//         <div>
//         {
//             cartItems.map((item) => (
//                 <div key= { item._id } >
//                 { item.productName }
//                 </div>
//             ))
//         }
//         </div>

//         </div>
//     )


// export default cartsPage;