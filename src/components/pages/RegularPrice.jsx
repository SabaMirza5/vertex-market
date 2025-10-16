import React from "react";
import PricingCard from "../PricingCard";
import bgimg from "/bgimg.jpg";

const RegularPrice = () => {
  const cards = [
    {
      title: "Stock Cash Subscription Service",
      prices: {
        Monthly: "₹25,555/-",
        Quarterly: "₹65,555/-",
        "Half Yearly": "₹1,24,999/-",
      },
      details: [
        "Risk - High",
        "Duration - Intraday/Positional",
        "Recommendation - 1-3 Calls",
        "Delivery Mode: WhatsApp (Daily Updates | Market Hours Only) NO on-call Support.",
      ],
    },
    {
      title: "Stock/Index Future Subscription Service",
      prices: {
        Monthly: "₹45,555/-",
        Quarterly: "₹75,555/-",
        "Half Yearly": "₹1,24,999/-",
      },
      details: [
        "Risk - High",
        "Duration - Intraday/Positional",
        "Recommendation - 1-3 Calls",
        "Delivery Mode: WhatsApp (Daily Updates | Market Hours Only) NO on-call Support.",
      ],
    },
    {
      title: "Stock/Index Option Subscription Service",
      prices: {
        Monthly: "₹45,555/-",
        Quarterly: "₹75,555/-",
        "Half Yearly": "₹1,24,999/-",
      },
      details: [
        "Risk - High",
        "Duration - Intraday",
        "Recommendation - 1-3 Calls",
        "Delivery Mode: WhatsApp (Daily Updates | Market Hours Only) NO on-call Support.",
      ],
    },
    {
      title: "Commodity (MCX/NCDEX)",
      prices: {
        Monthly: "₹65,555/-",
        Quarterly: "₹95,555/-",
        "Half Yearly": "₹1,24,999/-",
      },
      details: [
        "Risk - High",
        "Duration - Intraday/Positional",
        "Recommendation - 1-3 Calls",
        "Delivery Mode: WhatsApp (Daily Updates | Market Hours Only) NO on-call Support.",
      ],
    },
    {
      title: "Bullions Subscription Service",
      prices: {
        Monthly: "₹35,555/-",
        Quarterly: "₹75,555/-",
        "Half Yearly": "₹1,24,999/-",
      },
      details: [
        "Risk - High",
        "Duration - Intraday/Positional",
        "Recommendation - 1-3 Calls",
        "Delivery Mode: WhatsApp (Daily Updates | Market Hours Only) NO on-call Support.",
      ],
    },
  ];
  return (
    <>
      <section
        className="relative bg-cover mb-10  bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            Regular - Pricing
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

export default RegularPrice;
