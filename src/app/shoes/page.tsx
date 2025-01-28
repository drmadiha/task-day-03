"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProduct } from "@/sanity/lib/querries";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Products } from "./../../../type/product";
import Header from "../component/header";
import Header2 from "../component/header2";
import Link from "next/link";
import { addToCart } from "../action/action";
import Swal from "sweetalert2";

const SHOES = () => {
  const [products, setProducts] = useState<Products[]>([]);


  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Products[] = await client.fetch(allProduct);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);
  //addtocart
  const handleAddToCart = (e: React.MouseEvent, Product: Products) => {
    e.preventDefault()
    // alert("ok")
    // consloe.log(handleAddToCart);
    Swal.fire({
      position:"top-right",
      icon:"success",
      title:`${Product.productName}added to cart`,
      showConfirmButton:false,
      timer:1000,
    })
   
    addToCart(Product)
    
  }

  return (
    <>
      <Header />
      <Header2 />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Our All Latest Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="border p-4 rounded shadow-sm flex flex-col items-center"
                key={product._id}
              >
                <Link href={`/product/${product.slug?.current}`}>
                  <div className="block w-full">
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.productName}
                        className="rounded w-full object-cover"
                        width={300}
                        height={300}
                      />
                    )}
                    <h2 className="text-lg font-bold text-center mt-4">
                      {product.productName}
                    </h2>
                    <p className="text-center text-gray-600 mt-2">
                      {product.description}
                    </p>
                    <p className="text-center text-lg font-semibold text-blue-500 mt-4">
                      ₹ {product.price}
                    </p>
                    {/* button */}
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg hover::scale-110 transition:transform duration-300 ease-in-out"
                      onClick={(e) => handleAddToCart(e, product)}>
                      Add To Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
        {/* //addtocart function apply on button */}


        <div className="mt-7 ml-[35%]">

        </div>

      </div>
    </>
  );
};

export default SHOES;
















// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { allProduct } from "@/sanity/lib/querries";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Products } from "../../../type/product";
// import Header from "../component/header";
// import Header2 from "../component/header2";
// import Link from "next/link";

// const SHOES = () => {
//     const [products, setProducts] = useState<Products[]>([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const fetchedProducts: Products[] = await client.fetch(allProduct);
//                 setProducts(fetchedProducts);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             }
//         }
//         fetchProducts();
//     }, []);

//     return (
//         <>
//             <Header />
//             <Header2 />
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-2xl font-bold mb-6 text-center">
//                     Our All Latest Products
//                 </h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <div
//                                 className="border p-4 rounded shadow-sm flex flex-col items-center"
//                                 key={product._id}
//                             >
//                                 <Link href={`/product/${product.slug.current}`}>
//                                     {product.image && (
//                                         <Image
//                                             src={urlFor(product.image).url()}
//                                             alt={product.productName}
//                                             className="rounded w-full object-cover"
//                                             width={300}
//                                             height={300}
//                                         />
//                                     )}
//                                     <h2 className="text-lg font-bold text-center mt-4">
//                                         {product.productName}
//                                     </h2>
//                                     <p className="text-center text-gray-600 mt-2">
//                                         {product.description}
//                                     </p>
//                                     <p className="text-center text-lg font-semibold text-blue-500 mt-4">
//                                         ₹ {product.price}
//                                     </p>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500">No products found.</p>
//           </Link>
//         )}
//             </div>
//         </div >
//     </>
//   );
// };

// export default SHOES;































// "use client"
// import { client } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"
// import { allProduct } from "@/sanity/lib/querries"
// import Image from "next/image"
// import React, { useEffect, useState } from "react"
// import { Products } from "../../../type/product"
// import { Products } from './../../../type/product';
// import { addToCart } from "../action/action";
// import { Products } from '@/type/Products';
// import { Product } from '/type/Products';
// import { addToCart } from './../action/action';
// import { Product } from '/type/Products';
// import { Product } from '/type/Products';
// import { Product } from '@/type/Products';

// const SHOES = () => {
//     const [product, setProduct] = useState<Products[]>([])
//     useEffect(() => {
//         async function fetchproduct() {
//             const fetchproduct: Products[] = await client.fetch(allProduct)
//             setProduct(fetchproduct)
//         }
//         fetchproduct()
//     }, [])
//     return (

//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Our All Latest Product</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {product.length > 0 ? (
//                     {
//                         product.map((product) => (
//                             <div
//                                 className="border p-4 rounded shadow-sm flex flex-col items-center"
//                                 key={product._id}
//                             >
//                                 <Image
//                                     src={urlFor(product.image).url()}
//                                     alt={product.productName}
//                                     className="rounded w-full object-cover"
//                                     width={300}
//                                     height={300}
//                                 />
//                         )}


//         // <div className="max-w-6xl mx-auto px-4 py-8">
//         //     <h1 className="text-2xl font-bold mb-6 text-center">Our All Latest Product</h1>
//         //     <div className="grid grid-col-1 cm:grid-col-2 md:grid-col-3 lg:grid-col-4"></div>
//         //     {product.map((product) => (
//         //         <div key={product._id}
//         //         className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
//         //             {product.productName}
//         //             {product.image && (
//         //                 <Image
//         //                 src={urlFor (product.image).url()}
//         //                 alt="image"
//         //                 width={200}
//         //                 height={200} className="w-full h-48 object-cover rounded-md"/>
//         //             )}
//                    <h2 className="text-lg font-bold text-center mt-4">
//                                 {product.productName}
//                             </h2>
//                             <p className="text-center text-gray-600 mt-2">
//                                 {product.description}
//                             </p>
//                             <p className="text-center text-lg font-semibold text-blue-500 mt-4">
//                                 ₹ {product.price}
//                             </p>
//                 </div>
//                                 )
//             )}
//                             </div>
// </div>
//         </div>
//     );
// };
// export default SHOES;