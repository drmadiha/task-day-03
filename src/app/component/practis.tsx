// "use client"
// import { sanityfetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/querries";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type Product = {
//     _id: string; // Sanity's default unique identifier
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string; // Adjusted field for image URL
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (index: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: index * 0.2 },
//     }),
// };

// export default async function Page() {
//     let products: Product[] = [];

//     try {
//         // Await the fetch to resolve data
//         products = await sanityfetch({ query: allProduct });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <motion.h1
//                 className="text-2xl font-bold mb-6 text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 Products
//             </motion.h1>
//             <motion.div
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                     visible: { transition: { staggerChildren: 0.2 } },
//                 }}
//             >
//                 {products.length > 0 ? (
//                     products.map((product, index) => (
//                         <motion.div
//                             className="border p-4 rounded shadow-sm flex flex-col items-center hover:shadow-md transition-shadow duration-300"
//                             key={product._id}
//                             custom={index}
//                             variants={cardVariants}
//                         >
//                             <Image
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="rounded w-full object-cover"
//                                 width={300}
//                                 height={300}
//                                 priority
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
//                         </motion.div>
//                     ))
//                 ) : (
//                     <motion.p
//                         className="col-span-full text-center text-gray-500"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         No products found.
//                     </motion.p>
//                 )}
//             </motion.div>
//         </div>
//     );
// }












import { sanityfetch } from "@/sanity/lib/fetch";
import { allProduct } from "@/sanity/lib/querries";
import Image from "next/image";

type Product = {
    _id: string; // Sanity's default unique identifier
    name: string;
    description: string;
    price: number;
    imageUrl: string; // Adjusted field for image URL
};

export default async function Page(){
    let products: Product[] = [];

    try {
        // Await the fetch to resolve data
        products = await sanityfetch({ query:allProduct });
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            className="border p-4 rounded shadow-sm flex flex-col items-center"
                            key={product._id}
                        >
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                className="rounded w-full object-cover"
                                width={300}
                                height={300}
                            />
                            <h2 className="text-lg font-bold text-center mt-4">
                                {product.name}
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
                    <p className="col-span-full text-center text-gray-500">
                        No products found.
                    </p>
                )}
            </div>
        </div>
    );
}


















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