import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import Link from "next/link"
const Header2 = () => {
  return (
    <div className="w-full h-[60px] bg-white flex justify-center items-center">
      <div className="w-full max-w-[1440px] h-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <SiNike className="text-[24px] text-black" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex w-auto h-auto items-center justify-center">
          <ul className="flex gap-6">
            <li><Link href="/new-feature" className="hover:underline text-[14px]">New & Feature</Link></li>
            <li><Link href="/" className="hover:underline text-[14px]">Men</Link></li>
            <li><Link href="./" className="hover:underline text-[14px]">Women</Link></li>
            <li><Link href="./" className="hover:underline text-[14px]">Kids</Link></li>
            <li><Link href="./" className="hover:underline text-[14px]">Sale</Link></li>
            <li><Link href="./" className="hover:underline text-[14px]">SINKER</Link></li>
          </ul>
        </div>

        {/* Search and Icons Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="flex items-center border rounded-md px-2">
            <CiSearch className="text-[20px] text-gray-500" />
            <input
              type="text"
              id="name"
              placeholder="Search"
              className="bg-gray-200 text-[14px] placeholder-gray-500 focus:outline-none w-[120px] md:w-[200px] px-2 py-1"
            />
          </div>

          {/* Favorite and Cart Icons */}
          <Link href="/contactus"> <CiHeart className="text-black text-[24px] hover:text-gray-700" /></Link>
        <Link href="/checkoutpage"><HiOutlineArchiveBox className="text-black text-[24px] hover:text-gray-700" /></Link>
      </div>
    </div>
    </div>










    // <div className="w-full h-[60px] justify-center bg-white flex">
    //     <div className="w-[1440px] h-[36px] bg-red-200 flex justify-evenly">
    //          <div className="w-[78.47] h-[78.47]"><SiNike className="text-[20px] mt-2 ml-5" /></div> 
    //         <div className="w-[1213px] h-[60px] flex justify-center" >
    //             <ul className="flex gap-5 mt-2">
    //                 <li> <Link href="./">New & Feature</Link></li>
    //                 <li><Link href="./">Men</Link> </li>
    //                 <li><Link href="./">Women</Link></li>
    //                 <li><Link href="./">Kids</Link></li>
    //                 <li><Link href="./">Sale</Link></li>
    //                 <li><Link href="./">SINKER</Link></li>
    //             </ul>
    //         </div>


    //                 <div className=" flex border-2">
    //                     <h1 className="flex">
    //                         <CiSearch className="mt-2 text-[12px] bg-gry-50  w-[24px] h-[24px]" />
    //                         <input className="bg-gray-200 mt-3 mr-4 w-[84px] h-[14px] " type="text" id="name" placeholder="Search" />

    //                     </h1>
    //                 </div>
    //                 <CiHeart className="text-[12px]  mt-1 text-black w-[36px] h-[36px] mr-4" />
    //                 <HiOutlineArchiveBox className="text-[12px]  mt-1 text-black w-[36px] h-[36px] mr-4" />




    //     </div>

    // </div>
  )
}
export default Header2