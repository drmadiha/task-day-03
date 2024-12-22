import React from "react";
import Header2 from "../component/header2";
const HelpPage = () => {
  return (
    <>
     <Header2/>
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div
        className="w-[880px] h-auto bg-white shadow-lg p-6"
        style={{
          boxSizing: "border-box",
        }}
      >
        <header className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">GET HELP</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full max-w-lg border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4">
              We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>
                If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.
              </li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-4">
              <span className="font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member,{" "}
              <a href="#" className="text-blue-600 underline">
                join us
              </a>{" "}
              today.
            </p>

            <div className="flex space-x-4 mb-8">
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                JOIN US
              </button>
              <button className="bg-gray-100 text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200">
                SHOP NIKE
              </button>
            </div>

            <h3 className="text-lg font-medium mb-4">FAQs</h3>
            <div className="space-y-4">
              {/* FAQ Items */}
              {[
                {
                  question: "Does my card need international purchases enabled?",
                  answer: "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.",
                },
                {
                  question: "Can I pay for my order with multiple methods?",
                  answer: "No, payment for Nike orders can’t be split between multiple payment methods.",
                },
                {
                  question: "What payment method is accepted for SNKRS orders?",
                  answer: "You can use any accepted credit card to pay for your SNKRS order.",
                },
                {
                  question: "Why don’t I see Apple Pay as an option?",
                  answer:
                    "To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="font-medium">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <span>Was this answer helpful?</span>
              <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">👍</button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">👎</button>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium">Related</h4>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <a href="#" className="text-blue-600 underline">
                    WHAT ARE NIKE’S DELIVERY OPTIONS?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
            <div className="space-y-6">
              {[
                {
                  icon: "📞",
                  title: "000 800 919 0566",
                  subtitle1: "Products & Orders: 24 hours a day, 7 days a week",
                  subtitle2: "Company Info & Enquiries: 07:30 - 16:30, Monday - Friday",
                },
                {
                  icon: "💬",
                  title: "24 hours a day",
                  subtitle1: "7 days a week",
                },
                {
                  icon: "✉️",
                  subtitle1: "We’ll reply within five business days",
                },
                {
                  icon: "📍",
                  title: "STORE LOCATOR",
                  subtitle1: "Find Nike retail stores near you",
                },
              ].map((contact, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <span className="text-2xl ">{contact.icon}</span>
                  <div>
                    {contact.title && <p className="font-medium">{contact.title}</p>}
                    <p className="text-gray-600">{contact.subtitle1}</p>
                    {contact.subtitle2 && <p className="text-gray-600">{contact.subtitle2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HelpPage;















