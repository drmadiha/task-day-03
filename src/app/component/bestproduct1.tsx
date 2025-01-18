// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { bestAirMaxQuery } from "../../../lib/query";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// interface IProducts {
//     id: string;
//     productName: string;
//     image: any;
//     price: number;
//     category: string;
// }

// export default function ItemSlider() {
//     const [products, setProducts] = useState<IProducts[]>([]);

//     useEffect(() => {
//         const getProductData = async () => {
//             try {
//                 const response: IProducts[] = await client.fetch(bestAirMaxQuery);
//                 setProducts(response);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };
//         getProductData();
//     }, []);

//     return (
//         <div className="relative top-4 h-auto">
//             <Swiper
//                 slidesPerView={3.3}
//                 spaceBetween={10}
//                 pagination={{
//                     clickable: true,
//                 }}
//             >
//                 {products.map((product: IProducts, index: number) => (
//                     <SwiperSlide key={product.id || index}>
//                         <Link href={`bestproduct/${product.id}`}>
//                             <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
//                                 <Image
//                                     src={urlFor(product.image).url()}
//                                     alt={product.productName}
//                                     width={300}
//                                     height={300}
//                                     className="w-full object-cover rounded"
//                                 />
//                                 <div className="mt-2">
//                                     <h2 className="text-sm font-bold">{product.productName}</h2>
//                                     <p className="text-gray-600">₹ {product.price}</p>
//                                     <p className="text-gray-500 text-sm">{product.category}</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }











// import { client } from "@/sanity/lib/client";
// import Image from "next/image"
// import { bestAirMaxQuery } from "../../../lib/query";
// import { useEffect, useState } from 'react';
// import Product from './../product/page';
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// interface IProducts {
//     id: string;
//     productName: string;
//     image: any;
//     price: number;
//     category: string;
// }
// export default function ItemSlider() {
//     useEffect(() => {
//         const getProductData = async () => {
//             const Product = await client.fetch(bestAirMaxQuery);
//             setProducts(products);
//         };
//         getProductData();
//     }, []);

//     const [Products, setProducts] = useState<IProducts[]>();
//     return (
//         <>
//             <div className="relative top-4 h-auto">
//                 <Swiper
//                     slidesPerView={3.3}
//                     spaceBtween={0}
//                     pagination={{
//                         clickable: true,
//                     }}>
//                     {Products?.map((product: IProducts, index: number) => {
//                         return (
//                             <SwiperSlider key={index}>
//                                 <Link href={`bestproduct/${product.id}`}>
//                                     <ImageCard
//                                         image={urlFor(product.image).url()}
//                                         tittle={product.productName}
//                                         price={product.price}
//                                         category={product.category}>

//                                 </Link>
//                             </SwiperSlider>
//                         );
//                     })}
//                 </Swiper>

//             </div>
//         </>
//     );
// }





