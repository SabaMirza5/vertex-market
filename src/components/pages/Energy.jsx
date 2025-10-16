

import React from "react";
import stockbg from "/stockbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Market Analysis",
    description:
      "Consultants analyze energy market trends, supply-demand dynamics, regulatory changes, and technological developments affecting energy prices and trading opportunities.",
  },
  {
    title: "Energy Efficiency",
    description:
      "Advising on strategies to improve energy efficiency and reduce operational costs for businesses and organizations through optimized energy consumption.",
  },
  {
    title: "Risk Management",
    description:
      "Advising on risk mitigation strategies related to energy price volatility, supply chain disruptions, and geopolitical factors affecting energy markets.",
  },
  {
    title: "Market Insights",
    description:
      "Offering insights into sector-specific developments and their impact on futures prices and market dynamics.",
  },
];

export default function Energy() {
  return (
    <StockCashSubscription
      backgroundImage={stockbg}
      mainTitle="Energy Trading Service"
      subTitle="Your trusted source for reliable and data-driven energy market analysis."
      sectionTitle="Energy Trading Service"
      sectionDescription="Energy consultant services specialize in providing expert advice and strategic solutions related to the energy sector. These services cover various aspects of energy production, distribution, management, and sustainability with comprehensive market analysis and trading strategies."
      services={servicesData}
    />
  );
}
