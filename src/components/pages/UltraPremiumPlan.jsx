

import React from "react";
import PricingCard from "../PricingCard";
import stockoption from "/stockoption.jpg";

const UltraPremiumPlan = () => {
    const cards = [
    {
      title: "HNI Subscription Service (Stock Cash / Commodity (MCX/NCDEX))",
      prices: {
        Monthly: "₹1,49,999/-",
        Quarterly: "₹ -/-",
        "Half Yearly": "₹ -/-",
      },
      details: [
        "Risk - Low",
        "Duration - Intraday/Positional",
        "Recommendation - 1 Call",
        "Delivery Mode : WhatsApp (Daily Updates | 24 x 7)",
        "ON call support Senior Executive Manager.",
      ],
    },
    {
      title: "HNI Subscription Service (Stock/Index Future Subscription Service)",
      prices: {
        Monthly: "₹1,49,999/-",
        Quarterly: "₹ -/-",
        "Half Yearly": "₹ -/-",
      },
      details: [
        "Risk - Low",
        "Duration - Intraday/Positional",
        "Recommendation - 1 Call",
        "Delivery Mode : WhatsApp (Daily Updates | 24 x 7)",
        "ON call support Senior Executive Manager.",
      ],
    },
    {
      title: "HNI Subscription Service (Stock/Index Option Subscription Service)",
      prices: {
        Monthly: "₹1,49,999/-",
        Quarterly: "₹ -/-",
        "Half Yearly": "₹ -/-",
      },
      details: [
        "Risk - Low",
        "Duration - Intraday/Positional",
        "Recommendation - 1 Call",
        "Delivery Mode : WhatsApp (Daily Updates | 24 x 7)",
        "ON call support Senior Executive Manager.",
      ],
    },
    {
      title: "HNI Subscription Service (Commodity (MCX/NCDEX))",
      prices: {
        Monthly: "₹1,49,999/-",
        Quarterly: "₹ -/-",
        "Half Yearly": "₹ -/-",
      },
      details: [
        "Risk - Low",
        "Duration - Intraday/Positional",
        "Recommendation - 1 Call",
        "Delivery Mode : WhatsApp (Daily Updates | 24 x 7)",
        "ON call support Senior Executive Manager.",
      ],
    },
    {
      title: "HNI Subscription Service (Bullions Subscription Service)",
      prices: {
        Monthly: "₹1,49,999/-",
        Quarterly: "₹ -/-",
        "Half Yearly": "₹ -/-",
      },
      details: [
        "Risk - Low",
        "Duration - Intraday/Positional",
        "Recommendation - 1 Call",
        "Delivery Mode : WhatsApp (Daily Updates | 24 x 7)",
        "ON call support Senior Executive Manager.",
      ],
    },
  ];
  return (
    <>
      <section
        className="relative bg-cover mb-10  bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${stockoption})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
           Ultra Premium - Pricing
          </h1>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 md:px-6 px-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default UltraPremiumPlan;
