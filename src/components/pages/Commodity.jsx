

import React from "react";
import stockbg from "/stockbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Market Analysis",
    description:
      "Analyzing supply-demand dynamics, global economic trends, weather patterns, and geopolitical factors affecting commodity prices across various sectors.",
  },
  {
    title: "Commodity Selection",
    description:
      "Identifying commodities with potential for price appreciation based on fundamental analysis, market forecasts, and seasonal patterns.",
  },
  {
    title: "Risk Management",
    description:
      "Advising on hedging strategies, including futures and options contracts, to mitigate price volatility risks and protect investments.",
  },
  {
    title: "Trading Strategies",
    description:
      "Developing trading strategies tailored to clients' risk tolerance and investment goals, including technical analysis and seasonal trading patterns.",
  },
];

export default function Commodity() {
  return (
    <StockCashSubscription
      backgroundImage={stockbg}
      mainTitle="Commodity Trading (MCX/NCDEX)"
      subTitle="Trade confidently with expert insights on MCX and NCDEX commodities."
      sectionTitle="Commodity Trading (MCX/NCDEX)"
      sectionDescription="Commodity (MCX/NCDEX) subscription services specialize in providing advice and recommendations for trading in commodities listed on Multi Commodity Exchange (MCX) and National Commodity and Derivatives Exchange (NCDEX). These services offer comprehensive support for commodity trading and investment strategies."
      services={servicesData}
    />
  );
}
