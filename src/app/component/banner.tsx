import Image from "next/image"
const Baneer = () => {
    return (
        <div className="w-[full] h-[977px] bg-white flex justify-center items-center ">
            <div className="w-[1344px] h-[977px] bg-white">
                <h1 className="w-[96.26px] h-[27px] font-medium">Featured</h1>
                {/* banner Image Section */}
                <div className="w-full">
                    <Image
                        src="/Image (1).png"
                        alt="hero pic"
                        width={1344}
                        height={700}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full flex flex-col items-center mt-8 px-4">
                    <div className="text-center">


                        {/* Product Name */}
                        <h1 className="text-[28px] font-medium mt-4 sm:text-[32px] md:text-[36px]">
                            STEP INTO WHAT FEELS GOOD
                        </h1>

                        {/* Description */}
                        <p className="text-[12px] font-medium mt-4 max-w-[473px] max-h-[24px] mx-auto sm:text-[10px] md:text-[13px]">
                        Cause everyone should know the feeling of running in that perfect pair.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6 w-[152.42px] h-[39px]">
                        <button className="px-6 py-2 bg-black text-white text-[12px] rounded-full hover:bg-gray-800 transition">
                        Find Your Shoe
                        </button>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Baneer