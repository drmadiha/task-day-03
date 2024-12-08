import Image from "next/image"
const Esentials = () => {
    return (


        <div className="w-full bg-white flex justify-center items-center mt-10 px-4">
            <div className="max-w-[1356px] w-full bg-white">
                {/* Section Title */}
                {/* <h1 className="text-[16px] font-medium ">The Essentials</h1> */}
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium ">
                    The Essentials
                </h1>


                {/* Image Grid */}
                <div className="flex flex-wrap justify-around">
                    {/* Image Card */}
                    <div className="w-[90%] sm:w-[300px] md:w-[400px] lg:w-[440px] h-auto bg-white">
                        <Image
                            src="/Frame (1).png"
                            alt="pic1"
                            width={440}
                            height={540}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-[90%] sm:w-[300px] md:w-[400px] lg:w-[440px] h-auto bg-white">
                        <Image
                            src="/Frame (2).png"
                            alt="pic2"
                            width={440}
                            height={540}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-[90%] sm:w-[300px] md:w-[400px] lg:w-[440px] h-auto bg-white">
                        <Image
                            src="/Frame (3).png"
                            alt="pic3"
                            width={440}
                            height={540}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>











        // <div className="w-full h-auto bg-white flex justify-center items-center mt-10">
        //     <div className="max-w-[1356px] h-[592px] w-full bg-white">
        //         <h1 className="w-[157.61px] h-[27px] font-medium">The Essentials</h1>
        //         <div className="w-[1356px] h-[540px] flex justify-around">
        //             <div className="w-[440px] h-[540px] bg-white">
        //                 <Image src="/Frame (1).png" alt="pic1"
        //                     width={440} height={540} />
        //             </div>
        //             <div className="w-[440px] h-[540px] bg-white">
        //                 <Image src="/Frame (2).png" alt="pic2"
        //                     width={440} height={540} />
        //             </div>
        //             <div className="w-[440px] h-[540px] bg-white">
        //                 <Image src="/Frame (3).png" alt="pic3"
        //                     width={440} height={540} />
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}
export default Esentials