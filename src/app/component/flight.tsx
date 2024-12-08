import Image from "next/image"
const Flight = () => {
    return (

        <div className="w-full min-h-screen bg-white flex justify-center items-center">
            <div className="w-full max-w-[1344px] bg-white">
                 {/* Section Heading  */}
                <h1 className=" text-lg font-bold mb-6">Do not Miss</h1>

                 {/* Image Section */}
                <div className="w-full max-w-[1344px] mx-auto">
                    <Image
                        src="/Image (2).png"
                        alt="pic1"
                        width={1344}
                        height={700}
                        className="w-full max-h-[700px] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full max-w-[1344px] flex justify-center items-center mt-16">
                    <div className="w-full max-w-[1008px] px-8 text-center">
                        <h1 className="text-2xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
                        <p className="text-sm text-gray-600 mb-4">
                            Your built-to-last all-week wears—but with style only Jordan Brand can deliver.
                        </p>
                        <div className="w-fit mx-auto">
                            <button
                                className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
                            >
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>









        // <div className="w-full h-[977px] bg-white  flex justify-center items-center">
        //     <div className=" w-[1344px] h-[977px] bg-white">
        //         <h1 className="w-[111.48px] h-[27px]">Don't Miss</h1>
        //         <div className=" w-[1344px] h-[700px] bg-white">
        //             <Image src="/Image (2).png"
        //                 alt="pic1"
        //                 width={1344}
        //                 height={700} />
        //         </div>
        //         <div className="w-[1344px] h-[177px] flex justify-center items-center mt-16">
        //         <div className="w-[1008px] h-[177px] bg-white justify-center items-center pl-[20%]">
        //             <h1 className="w-[512px] h-[60px] text-center mt-5 text-[25px] font-bold">FLIGHT ESSENTIALS</h1>
        //             <p className="w-[531px] h-[24px] text-[14px] text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        //             <div className="w-[80.38px] h-[39px] bg-black text-white ml-[25%] text-center mt-2 pt-1 rounded-full"> <button className="w-[37px] h-[24px] rounded-full ">Shop</button></div>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Flight