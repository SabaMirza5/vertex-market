

import React from "react";
import bullionsbg from "/bullionsbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Alternative Investments",
    description:
      "Advising on alternative investment opportunities such as private equity, hedge funds, real estate, venture capital, and exclusive investment products.",
  },
  {
    title: "Concierge Services",
    description:
      "Providing personalized concierge services such as private banking, legal advice, lifestyle management, and exclusive access to premium financial products.",
  },
  {
    title: "Investment Strategies",
    description:
      "Developing personalized investment strategies aligned with the HNI's risk tolerance, financial goals, timeline, and sophisticated investment preferences.",
  },
  {
    title: "Risk Management",
    description:
      "Implementing sophisticated risk management strategies to protect and preserve the HNI's wealth against market volatility and economic uncertainties.",
  },
];

export default function HniServices() {
  return (
    <StockCashSubscription
      backgroundImage={bullionsbg}
      mainTitle="HNI Services"
      subTitle="Your trusted partner for smart and secure bullion trading decisions."
      sectionTitle="HNI Services"
      sectionDescription="HNI subscription services cater to the unique financial needs and investment goals of High Net Worth Individuals (HNIs). These services provide exclusive, personalized financial solutions designed for sophisticated investors with substantial assets."
      services={servicesData}
    />
  );
}
