import Image from "next/image";
import Header2 from "../component/header2";
import Header from "../component/header";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
    return (
        <>
            <Header />
            <Header2 />
            <div className="w-screen bg-gray-100 flex items-center justify-center px-4 md:px-0">
                <div className="w-full max-w-5xl bg-white flex flex-col md:flex-row gap-6 py-6">
                    {/* Left Section */}
                    <div className="flex-1 bg-white p-4">
                        {/* Free Delivery Section */}
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h1 className="text-sm font-medium">Free Delivery</h1>
                            <div className="flex items-center justify-between mt-2 text-xs">
                                <p>Applies to orders of ₹ 14 000.00 or more.</p>
                                <button className="underline">View details</button>
                            </div>
                        </div>

                        {/* Bag Title */}
                        <h1 className="text-2xl font-bold mt-8">Bag</h1>

                        {/* Cart Items */}
                        <div className="bg-white mt-4 rounded-md">
                            {[1, 2].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b last:border-none p-4"
                                >
                                    {/* Image Section */}
                                    <div className="w-24 h-24">
                                        <Image
                                            src="/Image (3).png"
                                            alt="product-image"
                                            width={96}
                                            height={96}
                                            className="object-cover rounded-md"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="flex-1 ml-4">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-sm font-bold">Nike Dri-FIT ADV TechKnit Ultra</h1>
                                            <h1 className="text-sm font-bold">MRP: ₹ 3 895.00</h1>
                                        </div>
                                        <p className="text-xs mt-1">Men &rsquo s Short-Sleeve Running Top</p>
                                        <p className="text-xs">Ashen Slate/Cobalt Bliss</p>

                                        <div className="flex items-center gap-4 mt-2 text-xl text-gray-600">
                                            <FaRegHeart />
                                            <RiDeleteBin6Line />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-[350px] bg-white p-6 rounded-md text-black">
                        <h1 className="text-xl mb-4">Summary</h1>

                        <div className="flex justify-between text-sm mb-2">
                            <p>Subtotal</p>
                            <p>₹ 20 890.00</p>
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <p>Estimated Delivery & Handling</p>
                            <p>Free</p>
                        </div>

                        <div className="flex justify-between text-sm mb-4">
                            <p>Total</p>
                            <p>₹ 20 890.00</p>
                        </div>

                        <button className="w-full bg-black py-3 rounded-full text-center text-white text-sm font-medium hover:bg-gray-800">
                            Member Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}














































// import Image from "next/image";
// // import Header2 from "../component/header2";
// import Header from "../component/header";
// import { FaRegHeart } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// export default function Cart() {
//     return (
//         <>
//             <Header />
//             <Header2 />
//             <div className="w-screen bg-gray-100 flex items-center justify-center">
//                 <div className="w-[1100px] h-[632.89px] bg-gray-500 flex">
//                     <div className="w-[733.33px] h-[547.89px] bg-red-200">
//                         <div className="w-[717.33px] h-[62.89px] bg-gray-200 ml-2">
//                             <h1 className="w-[88px] h-[14px] text-[13px] pt-2 pl-1">Free Delivery</h1>
//                             <div className="w-[305.36px] h-[24.89px] flex mt-3">
//                                 <h1 className="w-[215px] h-[24px] text-[11px] ml-1">Applies to orders of ₹ 14 000.00 or more.</h1>
//                                 <button className="w-[64px] h-[24px] text-[11px] underline ml-3">View details</button>
//                             </div>
//                             <h1 className="w-[41px] h-[33px] mt-[77.89px] text-[22px] ml-8 font-bold">Bag</h1>
//                             <div className="w-[717.33px] h-[218px] bg-white  justify-center ">
//                                 <div className="w-[717.33px] h-[170px] bg-red-50 mt-7 flex justify-between">
//                                     <div className="w-[150px] h-[150px]">
//                                         <Image src="/Image (3).png" alt="boy-pic"
//                                             width={150} height={150} />
//                                     </div>
//                                     <div className="w-[537.33px] h-[170px] bg-red-300 ">
//                                         <div className="flex justify-between">
//                                             <div className="w-[230px] h-[28px] text-[14px] font-bold "><h1>Nike Dri-FIT ADV TechKnit Ultra</h1></div>
//                                             <div className="w-[123.22px] h-[28px] text-[15px] font-bold"><h1>MRP: ₹ 3 895.00</h1></div>
//                                         </div>
//                                         <div className="w-[235.31px] h-[84px]">
//                                             <h1>Men's Short-Sleeve Running Top</h1>
//                                             <h1>Ashen Slate/Cobalt Bliss</h1>
//                                             <p></p>
//                                         </div>
//                                         <div className="w-[537.33px] h-[34px] bg-red-900 flex gap-x-3 text-2xl">
//                                             <h1><FaRegHeart /></h1>
//                                             <h1><RiDeleteBin6Line /></h1>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div className="w-[717.33px] h-[170px] bg-red-50 mt-7 flex justify-between">
//                                     <div className="w-[150px] h-[150px]">
//                                         {/* <Image src="/" alt="boy-pic"
//                                             width={150} height={150} /> */}
//                                     </div>
//                                     <div className="w-[537.33px] h-[170px] bg-red-300 ">
//                                         <div className="flex justify-between">
//                                             <div className="w-[230px] h-[28px] text-[14px] font-bold "><h1>Nike Air Max 97 SE</h1></div>
//                                             <div className="w-[123.22px] h-[28px] text-[15px] font-bold"><h1>MRP: ₹ 3 895.00</h1></div>
//                                         </div>
//                                         <div className="w-[235.31px] h-[84px]">
//                                             <h1>Men's Short-Sleeve Running Top</h1>
//                                             <h1>Ashen Slate/Cobalt Bliss</h1>
//                                             <p></p>
//                                         </div>
//                                         <div className="w-[537.33px] h-[34px] bg-red-900 flex gap-x-3 text-2xl">
//                                             <h1><FaRegHeart /></h1>
//                                             <h1><RiDeleteBin6Line /></h1>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="w-[350.67px] h-[295px] bg-red-900">
//                         <h1 className="w-96 h-33 ml-2 text-[21px]">Summary</h1>
//                         <div className="w-[334.67px] h-[28px] flex mt-3">
//                             <p className="w-60 h-28 text-[14px] ml-2">Subtotal</p>
//                             <p className="w-80 h-28 text-right text-[14px]">₹ 20 890.00</p>
//                         </div>
//                         <div className="w-[334.67px] h-[28px] flex">
//                             <p className="w-[214px] h-28 text-[14px] ml-2">Estimated Delivery & Handling</p>
//                             <p className="w-32 h-28 text-right text-[14px]">Free</p>
//                         </div>

//                         <div className="w-[334.67px] h-[62px] flex">
//                             <p className="w-[33px] h-[28px] text-[14px] ml-2">Total</p>
//                             <p className="w-81 h-24 ml-52 text-[14px]">₹ 20 890.00</p>
//                         </div>
//                         <div className="w-[334.67px] h-[62px] bg-black flex justify-center rounded-full ml-2">
//                             <button className="w-[133PX] h-[24px] text-white text-[14px] justify-center pt-5">Member Checkout</button>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }







