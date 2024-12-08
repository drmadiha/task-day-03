import Image from "next/image"
const Gear = () => {
    return (

        <div className="w-full bg-white flex justify-center items-center py-10">
        <div className="w-full max-w-[1344px] bg-white">
            {/* <!-- Section Heading --> */}
            <h1 className=" text-xl font-bold mb-6">Gear Up</h1>
    
            {/* <!-- Products Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Product 1 --> */}
                <div className="w-full max-w-[300px] mx-auto">
                    <Image 
                        src="/Image (3).png" 
                        alt="Nike Dri-FIT ADV TechKnit Ultra" 
                        width={300} 
                        height={300} 
                        className="w-full object-cover"
                    />
                    <div className="mt-4 text-center">
                        <h1 className="text-sm font-bold mb-2">Nike Dri-FIT ADV TechKnit Ultra</h1>
                        <p className="text-xs text-gray-600">₹ 3 895</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Mens Short-Sleeve  <br/>Running Top
                        </p>
                    </div>
                </div>
    
                {/* <!-- Product 2 --> */}
                <div className="w-full max-w-[300px] mx-auto">
                    <Image 
                        src="/Image (4).png" 
                        alt="Nike Dri-FIT Challenger" 
                        width={300} 
                        height={300} 
                        className="w-full object-cover"
                    />
                    <div className="mt-4 text-center">
                        <h1 className="text-sm font-bold mb-2">Nike Dri-FIT Challenger</h1>
                        <p className="text-xs text-gray-600">₹ 3 895</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Mens 18cm (approx.) 2 <br/>-in-1 Versatile Shorts
                        </p>
                    </div>
                </div>
    
                {/* <!-- Product 3 --> */}
                <div className="w-full max-w-[300px] mx-auto">
                    <Image 
                        src="/Image (5).png" 
                        alt="Nike Dri-FIT ADV Run Division" 
                        width={300} 
                        height={300} 
                        className="w-full object-cover"
                    />
                    <div className="mt-4 text-center">
                        <h1 className="text-sm font-bold mb-2">Nike Dri-FIT ADV Run Division</h1>
                        <p className="text-xs text-gray-600">₹ 3 895</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Women Long-Sleeve <br/> Running Top
                        </p>
                    </div>
                </div>
    
                {/* <!-- Product 4 --> */}
                <div className="w-full max-w-[300px] mx-auto">
                    <Image 
                        src="/Image (6).png" 
                        alt="Nike Fast" 
                        width={300} 
                        height={300} 
                        className="w-full object-cover"
                    />
                    <div className="mt-4 text-center">
                        <h1 className="text-sm font-bold mb-2">Nike Fast</h1>
                        <p className="text-xs text-gray-600">₹ 3 895</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Women Mid-Rise 7/8 Running <br/> Leggings with Pockets
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    












        // <div className="w-full h-[561px] flex justify-center items-center bg-white">
        //     <div className="w-[1344px] h-[561px] bg-white">
        //         <h1>Gear Up</h1>
        //         <div className="w-[1356px] h-[509px] flex justify-between mt-5 ">
               
        //             <div className="w-[666px] h-[509px] bg-white flex mt-10 pt-10 justify-around" >
                        
        //                 <div className="w-[300px] h-[393px]">
                        
        //                     <Image src="/Image (3).png" alt="pic-man"
        //                         width={300}
        //                         height={300} />
        //                     <div className="w-[284px] h-[72px]">
        //                         <div className="flex gap-3 mt-4">
        //                             <h1 className="w-[219px] h-[24px] text-[14px] font-bold">Nike Dri-FIT ADV TechKnit Ultra</h1>
        //                             <h1 className="w-[52.67px] h-[17px] text-[14px]">₹ 3 895</h1>
        //                         </div>
        //                         <p className="w-[203.37px]h-[48px] text-[12px]">Men's Short-<br />Sleeve Running Top</p>

        //                     </div>
        //                 </div>

        //                 <div className="w-[300px] h-[393px]">
        //                     <Image src="/Image (4).png" alt="pic-man"
        //                         width={300}
        //                         height={300} />
        //                     <div className="w-[284px] h-[72px]">
        //                         <div className="flex gap-3 mt-4">
        //                             <h1 className="w-[219px] h-[24px] text-[14px] font-bold">Nike Dri-FIT Challenger</h1>
        //                             <h1 className="w-[52.67px] h-[17px] text-[14px]">₹ 3 895</h1>
        //                         </div>
        //                         <p className="w-[203.37px]h-[48px] text-[12px]">Men's 18cm (approx.) 2-<br/>in-1 Versatile Shorts</p>

        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-[666px] h-[509px] bg-white flex mt-10 pt-10 justify-around">
        //                 <div className="w-[300px] h-[393px]">
        //                 <Image src="/Image (5).png" alt="pic-man"
        //                         width={300}
        //                         height={300} />
        //                     <div className="w-[284px] h-[72px]">
        //                         <div className="flex gap-3 mt-4">
        //                             <h1 className="w-[219px] h-[24px] text-[14px] font-bold">Nike Dri-FIT ADV Run Division</h1>
        //                             <h1 className="w-[52.67px] h-[17px] text-[14px]">₹ 3 895</h1>
        //                         </div>
        //                         <p className="w-[203.37px]h-[48px] text-[12px]">Women's Long-Sleeve <br/> Running Top</p>

        //                     </div>
        //                 </div>
        //                 <div className="w-[300px] h-[393px]">
        //                 <Image src="/Image (6).png" alt="pic-man"
        //                         width={300}
        //                         height={300} />
        //                     <div className="w-[284px] h-[72px]">
        //                         <div className="flex gap-3 mt-4">
        //                             <h1 className="w-[219px] h-[24px] text-[14px] font-bold">Nike Fast</h1>
        //                             <h1 className="w-[52.67px] h-[17px] text-[14px]">₹ 3 895</h1>
        //                         </div>
        //                         <p className="w-[203.37px]h-[48px] text-[12px]">Women's Mid-Rise 7/8 Running <br/> Leggings with Pockets</p>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}
export default Gear