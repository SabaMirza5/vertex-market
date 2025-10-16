

import React from "react";
import bullionsbg from "/bullionsbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Market Analysis",
    description:
      "Analyzing global economic trends, geopolitical factors, interest rates, and currency movements influencing bullion prices across international markets.",
  },
  {
    title: "Bullion Selection",
    description:
      "Identifying opportunities in gold, silver, and other precious metals based on supply-demand dynamics, investor sentiment, and market cycles.",
  },
  {
    title: "Investment Strategies",
    description:
      "Developing customized investment strategies, including physical bullion, ETFs, futures, or options, based on clients' risk tolerance and investment objectives.",
  },
  {
    title: "Risk Management",
    description:
      "Advising on hedging strategies and risk mitigation techniques to protect against market volatility and price fluctuations in precious metals.",
  },
];

export default function Bullions() {
  return (
    <StockCashSubscription
      backgroundImage={bullionsbg}
      mainTitle="Bullions Trading Service"
      subTitle="Your trusted partner for smart and secure bullion trading decisions."
      sectionTitle="Bullions Trading Service"
      sectionDescription="Bullions subscription services specialize in providing expert advice and recommendations for trading in precious metals such as gold, silver, platinum, and palladium. These services offer comprehensive support for precious metals investment and trading strategies."
      services={servicesData}
    />
  );
}
