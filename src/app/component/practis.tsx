
"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProduct, forPro } from "@/sanity/lib/querries";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Products } from "../../../type/product";


const SHOE = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Products[] = await client.fetch(forPro);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
   
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
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default SHOE












// "use client"

// import { sanityfetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/querries";
// import { forPro } from "@/sanity/lib/querries";
// import Image from "next/image";

// type Product= {
//     _id: string; // Sanity's default unique identifier
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string; // Adjusted field for image URL
// };

// export default async function Practis(){
//     let products: Product[] = [];

//     try {
//         // Await the fetch to resolve data
//         products = await sanityfetch({ query:forPro });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <div
//                             className="border p-4 rounded shadow-sm flex flex-col items-center"
//                             key={product._id}
//                         >
//                             <Image
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="rounded w-full object-cover"
//                                 width={300}
//                                 height={300}
//                             />
//                             <h2 className="text-lg font-bold text-center mt-4">
//                                 {product.name}
//                             </h2>
//                             <p className="text-center text-gray-600 mt-2">
//                                 {product.description}
//                             </p>
//                             <p className="text-center text-lg font-semibold text-blue-500 mt-4">
//                                 ₹ {product.price}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center text-gray-500">
//                         No products found.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// }


















// import { sanityfetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/querries"; // Corrected "querries" to "queries"
// import Image from "next/image";

// type Product = {
//     _id: string; // Corrected key name to match Sanity's default `_id`
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
// };

// export default async function Product() {
//     let products: Product[] = [];

//     try {
//         // Fetch products using the sanityfetch function
//         products = await sanityfetch({ query: allProduct });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }

//     return(
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <div
//                             className="border p-4 rounded shadow-sm flex flex-col items-center"
//                             key={product._id}
//                         >
//                             <Image
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="rounded w-full object-cover"
//                                 width={300}
//                                 height={300}
//                             />
//                             <h2 className="text-lg font-bold text-center mt-4">
//                                 {product.name}
//                             </h2>
//                             <p className="text-center text-gray-600 mt-2">
//                                 {product.description}
//                             </p>
//                             <p className="text-center text-lg font-semibold text-blue-500 mt-4">
//                                 ₹ {product.price}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center text-gray-500">
//                         No products found.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// }










// import { sanityfetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/querries";
// import Image from "next/image";

// type Product = {
//     _id: string; // Corrected key name to match Sanity's default `_id`
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string; // Adjusted the casing for consistency
// };

// export default async function Practis(){
//     let products: Product[] = [];

//     try {
//         products = await sanityfetch({ query: allProduct });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }

//     return (
//         <>
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <div
//                                 className="border p-4 rounded shadow-sm flex flex-col items-center"
//                                 key={product._id}
//                             >
//                                 <Image
//                                     src={product.imageUrl}
//                                     alt={product.name}
//                                     className="rounded w-full object-cover"
//                                     width={300}
//                                     height={300}
//                                 />
//                                 <h2 className="text-lg font-bold text-center mt-4">
//                                     {product.name}
//                                 </h2>
//                                 <p className="text-center text-gray-600 mt-2">
//                                     {product.description}
//                                 </p>
//                                 <p className="text-center text-lg font-semibold text-blue-500 mt-4">
//                                     ₹ {product.price}
//                                 </p>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="col-span-full text-center text-gray-500">
//                             No products found.
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }











// import { sanityfetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/query";
// import Product from './../product/page';
// import Page from './../../../.next/static/chunks/main-app';

// type Product = {
//     _Id: string;
//     name: string;
//     description: string;
//     price: number;
//     Imageurl: string
// }
// export default async function Page() {
//     const Products: Product[] = sanityfetch({ query: allProduct })
//     return (
//         <>
//             <div>
//                 <h1>Products</h1>
//                 <div className="grid grid-cols-3 gap-4">
//                     {
//                         products.map((product) => {
//                             <div className="border p-4 rounded shadow-sm flex flex-col items-center" key={product._Id}>
//                                 <Image src={product.Imageurl} alt={product.name} className="w-60" height={500} width={500} />
//                                 <h2 className="text-xl font-bold text-center">{product.name}</h2>
//                                 <p className="text-center">
//                                     {product.description}
//                                 </p>
//                                 <p className="text-center">
//                                     {product.price}
//                                 </p>
//                             </div>
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }