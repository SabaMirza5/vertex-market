
import React from "react";
import PricingCard from "../PricingCard";
import bgabout from "/bgabout.jpg";

const PremiumPlan = () => {
    const cards = [
    {
      title: "Stock Cash Subscription Service",
      prices: {
        Monthly: "₹65,555/-",
        Quarterly: "₹1,45,555/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday/Positional",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
    {
      title: "Stock/Index Future Subscription Service",
      prices: {
        Monthly: "₹75,555/-",
        Quarterly: "₹1,65,555/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday/Positional",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
    {
      title: "Stock/Index Option Subscription Service",
      prices: {
        Monthly: "₹85,555/-",
        Quarterly: "₹1,85,555/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
    {
      title: "Commodity (MCX/NCDEX)",
      prices: {
        Monthly: "₹75,555/-",
        Quarterly: "₹1,55,555/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday/Positional",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
    {
      title: "Dynamic Subscription Service (BTST/STBT/Swing Trade)",
      prices: {
        Monthly: "₹89,999/-",
        Quarterly: "₹1,70,999/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday/Positional",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
    {
      title: "Bullions Subscription Service",
      prices: {
        Monthly: "₹85,555/-",
        Quarterly: "₹1,75,555/-",
        "Half Yearly": "₹2,49,999/-",
      },
      details: [
        "Risk - Medium",
        "Duration - Intraday",
        "Recommendation - 1-2 Calls",
        "Delivery Mode : WhatsApp & ON call support Executive Manager (Daily Updates | Market Hours Only)",
      ],
    },
  ];
  return (
    <>
      <section
        className="relative bg-cover mb-10  bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgabout})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6 text-white max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            Premium - Pricing
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

export default PremiumPlan;
