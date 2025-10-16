import React, { useState } from "react";
import ContactUsPopup from "./ContactUsPopup";

const PricingCard = ({ title, prices, details }) => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
     <div className="bg-white shadow-lg rounded-2xl md:p-6 p-4 w-full  flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-[#052365] md:text-2xl text-xl font-semibold  mb-4 text-center">
        {title}
      </h3>

      <div className="flex bg-[#f0f4ff] rounded-full mb-4">
        {["Monthly", "Quarterly", "Half Yearly"].map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`px-4 py-1 md:text-sm text-xs font-medium rounded-full transition-all duration-200 ${
              selectedPlan === plan
                ? "bg-[#1da1f2] text-white"
                : "text-[#052365] hover:bg-[#e4ecff]"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>

      <p className="text-2xl font-bold text-[#1da1f2] mb-4">
        {prices[selectedPlan]}
      </p>

      <div className="space-y-2 text-sm text-gray-700 text-center border-t border-b py-4 w-full">
        {details.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <button onClick={() => setShowPopup(true)} className="mt-6 bg-[#052365] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#1da1f2] transition-all w-full">
        Sign Up
      </button>
    </div>
    <ContactUsPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
   
  );
};

export default PricingCard;
