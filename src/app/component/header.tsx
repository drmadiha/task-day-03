import Image from "next/image"
import Link from "next/link"


const Header=()=>{
  
    return(
        <>
   
<div className="w-full h-[36px] justify-center bg-white flex">
  <div className="w-full max-w-[1440px] h-[36px] bg-white justify-between flex items-center px-4">
    {/* Logo Section */}
    <div className="w-[24px] h-[24px] flex items-center">
      <Image
        src="/Frame.png"
        alt="logo"
        width={24}
        height={24}
        className="ml-2"
      />
    </div>

    {/* Skip to Main Content */}
    <div className="w-auto h-[26px] flex items-center">
      <h1 className="text-[14px] text-center">Skip to main content</h1>
    </div>

    {/* Navigation Buttons */}
    <ul className="w-auto h-[36px] flex items-center gap-4">
      <li className="text-[14px] px-4 py-1 hover:underline">
        <Link href="/shoes">
        Find a Store
        </Link>
      </li>
      <li className="text-[14px] px-4 py-1 border-l-2 border-black hover:underline">
        <Link href="/checkoutpage">
        Help </Link>
      </li>
      <li className="text-[14px] px-4 py-1 border-l-2 border-black hover:underline">
        <Link href="/joinus">
        Join Us</Link>
      </li>
      <li className="text-[14px] px-4 py-1 border-l-2 border-black hover:underline"><Link href="/sign-in"> Sign In</Link></li>
    </ul>
  </div>
</div>

     </>
    )
}
export default Header