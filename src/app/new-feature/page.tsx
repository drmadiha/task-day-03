import Image from "next/image"
import React from "react"
import Header from "../component/header";
import Header2 from "../component/header2";
import { PiTrolleySuitcaseBold } from "react-icons/pi";

export default function NewFeature() {
    return (
        <>
            <Header />
            <Header2 />

            <div className="w-full min-h-screen bg-white flex justify-center items-center p-4">
    <div className="w-full max-w-[1200px] bg-white flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
        {/* Image Section */}
        <div className="w-full max-w-[653px] h-auto flex justify-center md:mt-[10%]">
            <Image
                src="/Image (7).png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={653}
                height={653}
                className="w-full max-w-[653px] h-auto object-cover bg-gray-200"
            />
        </div>

        {/* Details Section */}
        <div className="w-full max-w-[376px] bg-white">
            {/* Title */}
            <h1 className="text-[28px] md:text-[35px] font-bold leading-tight pt-20 md:pt-[30%] px-6">
                Nike Air Force 1 <br /> PLT.AF.ORM
            </h1>

            {/* Description */}
            <p className="text-[14px] text-gray-700 leading-6 mt-10 px-6">
                Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out -inspired construction; including unique layering and exposed foam accents; ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
            </p>

            {/* Price */}
            <div className="mt-8 px-6">
                <p className="text-[18px] font-medium">₹ 8,695.00</p>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 px-6">
                <button className="w-full max-w-[200px] h-[44px] bg-black text-white flex items-center justify-center gap-2 rounded-full hover:bg-gray-800 transition">
                    <PiTrolleySuitcaseBold className="text-white text-[15px]" />
                    <span className="text-[13px]">Add To Cart</span>
                </button>
            </div>
        </div>
    </div>
</div>






            
            {/* <div className="w-full min-h-screen bg-white flex justify-center items-center p-4">
                <div className="W-[1200PX] H-[1125PX] bg-white flex justify-between">
                    <div className="w-[653px] h-[653px] bg-white justify-center mt-[10%] ">
                        <Image
                            src="/Image (7).png"
                            alt="Nike Dri-FIT ADV TechKnit Ultra"
                            width={653}
                            height={653}
                            className="w-full object-cover bg-gray-200" />
                    </div>
                    <div className="w-[376px] h-[1041px] bg-white">
                        <h1 className="w-[367px] h-[96px] pt-[33%] text-[35px] font-bold pl-10">Nike Air Force 1 <br/>
                        PLT.AF.ORM</h1>
                        <p className="w-[374.92px] h-[252px] pt-[33%] text-[14px] text-left pl-10 pr-5">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                        <div className="w-[294.44px] h-[90px] mt-[25%] ml-10">
                        <p className="w-[229px] h-[34px]">₹ 8 695.00</p>
                        </div>
                        <div className="w-[174.42px] h-[44px] bg-black text-white text-center pt-1 ml-10 rounded-full">
                            <button className="w-[99px] h-[29px] flex text-[13px]  mt-2 ml-10 text-center gap-2.5"> <PiTrolleySuitcaseBold  className="text-white text-[15px]"/> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}