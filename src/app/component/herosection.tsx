import Image from "next/image"
const Herosection = () => {
    return (

        <div className="w-full min-h-screen bg-white flex justify-center items-center p-4">
            <div className="max-w-[1344px] w-full bg-white">
                {/* Hero Image Section */}
                <div className="w-full">
                    <Image
                        src="/Image.png"
                        alt="hero pic"
                        width={1344}
                        height={700}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full flex flex-col items-center mt-8 px-4">
                    <div className="text-center">
                        {/* Title */}
                        <h1 className="text-[16px] font-medium">First Look</h1>

                        {/* Product Name */}
                        <h1 className="text-[28px] font-medium mt-4 sm:text-[32px] md:text-[36px]">
                            Nike Air Max Pulse
                        </h1>

                        {/* Description */}
                        <p className="text-[14px] font-medium mt-4 max-w-[600px] mx-auto sm:text-[16px] md:text-[18px]">
                            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                            —designed to push you past your limits and help you go to the max.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="px-6 py-2 bg-black text-white text-[12px] rounded-full hover:bg-gray-800 transition">
                            Notify Me
                        </button>
                        <button className="px-6 py-2 bg-black text-white text-[12px] rounded-full hover:bg-gray-800 transition">
                            Shop Air Max
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Herosection