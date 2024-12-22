
import React from "react";
import Image from "next/image";

import Header2 from "../component/header2";
const CheckoutPage = () => {
    return (
        <>
        <Header2/>
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto p-4 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Section: Form */}
                    <div className="lg:col-span-8 bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h2 className="text-xl font-semibold mb-6">
                            How would you like to get your order?
                        </h2>
                        <p>Customs regulation for India require a copy of the recipient &#39 s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                        <div className="mb-8 mt-5 border-4 border-black">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="deliveryMethod"
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span>Deliver it</span>
                            </label>
                        </div>

                        {/* Address Form */}
                        <form>
                            <h3 className="text-lg font-medium mb-4">Enter your name and address:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Address Line 1"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Address Line 2"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Locality"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    className="w-full border-gray-300 rounded-lg px-4 py-2 text-gray-500"
                                >
                                    <option>Select Territory</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-4 mb-6">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span>Save this address to my profile</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span>Make this my preferred address</span>
                                </label>
                            </div>

                            {/* Contact Information */}
                            <h3 className="text-lg font-medium mb-4">
                                What is your contact information?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            {/* PAN Information */}
                            <h3 className="text-lg font-medium mb-4">What is your PAN?</h3>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="PAN Number"
                                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <label className="flex items-center space-x-2 mb-6">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span>
                                    I agree to receive notifications and updates about my order
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-900"
                            >
                                Continue
                            </button>
                        </form>
                    </div>

                    {/* Right Section: Order Summary */}
                    <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/Image (3).png"
                                    alt="T-Shirt"
                                    width={208}
                                    height={208}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-medium">Arches Men, 27W</h3>
                                    {/* <p>Nike Dri-FIT <br>ADV TechKnit Ultra <br> Mens Short-Sleeve <br></br>Running Top</p> */}
                                    <p className="text-gray-500">White T-Shirt Nike Dri-FIT <br />ADV TechKnit Ultra <br /> Mens Short-Sleeve <br />Running Top</p>
                                    <p className="font-medium">₹ 3 895.00</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/Image (9).png"
                                    alt="Shoes"
                                    width={208}
                                    height={208}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-medium">Nike X Max</h3>
                                    <p className="text-gray-500">97 SE Mens <br/> Shoes</p>
                                    <p className="font-medium">$16 995.00</p>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-medium text-lg">
                                <span>Total</span>
                                <span>₹ 20 890.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};
export default CheckoutPage;