import { client } from "@/sanity/lib/client";
import { Products } from "../../../../type/product";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PiTrolleySuitcaseBold } from "react-icons/pi";
import Header from "@/app/component/header";
import Header2 from "@/app/component/header2";
import Link from "next/link";



interface ProductPageProps {
    params: Promise<{ slug: string }>
}
async function getProduct(slug: string): Promise<Products> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        description,
        price,
        }`, { slug }
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug)

    return (
        <>
            <Header  />
            <Header2 />

            <div className="w-full min-h-screen bg-white flex justify-center items-center p-4">
                <div className="w-full max-w-[1200px] bg-white flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
                    <div className="w-full max-w-[653px] h-auto flex justify-center md:mt-[10%]">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.productName}
                                width={500}
                                height={400}
                                className="w-full max-w-[653px] h-[500px] object-cover bg-gray-200" />
                        )}
                    </div>
                    <div className="w-full max-w-[376px] bg-white">

                        <h2 className="text-[28px] md:text-[35px] font-bold leading-tight pt-20 md:pt-[30%] px-6">
                            {product.productName}
                        </h2>
                        <p className="text-[14px] text-gray-700 leading-6 mt-10 px-6">
                            {product.description}
                        </p>
                        <div className="mt-8 px-6">
                            <p className="text-[18px] font-medium">
                                ₹ {product.price}
                            </p>
                        </div>
                        {/* //addtocart function apply on button */}
                        <Link href="/carts">  <button  className="w-full max-w-[200px] h-[44px] bg-black text-white flex items-center justify-center gap-2 rounded-full hover:bg-gray-800 transition">
                        <PiTrolleySuitcaseBold className="text-white text-[15px]" />
                         <span className="text-[13px]">Add To Cart</span> 
                         
                    </button>  </Link>
                        

                    </div>
                </div>

            </div >
        </>
    )
}