import { client } from "@/sanity/lib/client";
import Image from "next/image"

// interface IProducts {
//     id: string;
//     productName: string;
//     image: any;
//     price: number;
//     category: string;
// }
// const getProductData = async () => {
//     const query =* [_type == 'products']
//     const response = await client fetch(query);
//     return response;
// };





const Bestproduct = () => {

    return (

        <div className="w-full bg-white py-6 flex justify-center items-center">
            <div className="w-full max-w-[1440px] bg-white px-4">
                {/* <!-- Header Section --> */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-sm font-bold ml-3">Best of Air Max</h1>
                    <h1 className="text-sm font-bold mr-5 cursor-pointer">Shop</h1>
                </div>

                {/* <!-- Product Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Product 1 --> */}
                    <div className="w-full max-w-[441.36px] mx-auto bg-white p-4">
                        <Image
                            src="/Image (7).png"
                            alt="Nike Air Max Pulse - Women's Shoes"
                            width={441.36}
                            height={441.36}
                            className="w-full object-cover"
                        />
                        <div className="mt-4 ">
                            <h1 className="text-sm font-bold">Nike Air Max Pulse</h1>
                            <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
                            <p className="text-xs text-gray-500 mt-2">Womens Shoes</p>
                        </div>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div className="w-full max-w-[441.36px] mx-auto bg-white p-4">
                        <Image
                            src="/Image (8).png"
                            alt="Nike Air Max Pulse - Men's Shoes"
                            width={441.36}
                            height={441.36}
                            className="w-full object-cover"
                        />
                        <div className="mt-4 ">
                            <h1 className="text-sm font-bold">Nike Air Max Pulse</h1>
                            <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
                            <p className="text-xs text-gray-500 mt-2">Mens Shoes</p>
                        </div>
                    </div>

                    {/* <!-- Product 3 --> */}
                    <div className="w-full max-w-[441.36px] mx-auto bg-white p-4">
                        <Image
                            src="/Image (9).png"
                            alt="Nike Air Max 97 SE - Men's Shoes"
                            width={441.36}
                            height={441.36}
                            className="w-full object-cover"
                        />
                        <div className="mt-4 ">
                            <h1 className="text-sm font-bold">Nike Air Max 97 SE</h1>
                            <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
                            <p className="text-xs text-gray-500 mt-2">Mens Shoes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        // <div className="w-full h-[604.36px] flex justify-center iteams-center bg-red-800">
        //     <div className="w-[1440px] h-[604.36px] bg-red-300">
        //         <div className="w-[1440px] h-[52px] flex justify-between">
        //             <h1 className="w-[161.59px] h-[27px] text-[14px] font-bold ml-3">Best of Air Max</h1>
        //             <h1 className="w-[37px] h-[24px] mr-5  text-[14px] font-bold"  >Shop</h1>
        //         </div>
        //         <div className="w-[1440px] h-[540.36px] bg-red-300 flex justify-around">
        //             <div className="w-[441.36px] h-[510.36px] bg-red-200">
        //                 <Image
        //                     src="/Image (7).png"
        //                     alt="Nike Dri-FIT ADV TechKnit Ultra"
        //                     width={441.36}
        //                     height={441.36}
        //                     className="w-full object-cover"
        //                 />
        //                 <div className="mt-4 ">
        //                     <h1 className="text-sm font-bold mb-2">Nike Air Max Pulse</h1>
        //                     <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
        //                     <p className="text-xs text-gray-500 ">
        //                     Women's Shoes
        //                     </p>
        //                 </div>
        //             </div>

        //             <div className="w-[441.36px] h-[510.36px] bg-red-100">
        //             <Image
        //                     src="/Image (7).png"
        //                     alt="Nike Dri-FIT ADV TechKnit Ultra"
        //                     width={441.36}
        //                     height={441.36}
        //                     className="w-full object-cover"
        //                 />
        //                 <div className="mt-4 ">
        //                     <h1 className="text-sm font-bold mb-2">Nike Air Max Pulse</h1>
        //                     <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
        //                     <p className="text-xs text-gray-500 ">
        //                     Men's Shoes
        //                     </p>
        //                 </div>
        //             </div>
        //             <div className="w-[441.36px] h-[510.36px] bg-red-800">
        //             <Image
        //                     src="/Image (9).png"
        //                     alt="Nike Dri-FIT ADV TechKnit Ultra"
        //                     width={441.36}
        //                     height={441.36}
        //                     className="w-full object-cover"
        //                 />
        //                 <div className="mt-4 ">
        //                     <h1 className="text-sm font-bold mb-2">Nike Air Max 97 SE</h1>
        //                     <p className="text-xs text-gray-600 text-right">₹ 3 895</p>
        //                     <p className="text-xs text-gray-500 mb-5">
        //                     Men's Shoes
        //                     </p>
        //                 </div>
        //             </div>

        //         </div>

        //     </div>
        // </div>
    )
}
export default Bestproduct