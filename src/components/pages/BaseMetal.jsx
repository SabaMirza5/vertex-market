


import React from "react";
import stockbg from "/stockbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Market Analysis",
    description:
      "Consultants conduct in-depth analysis of supply-demand dynamics, global economic trends, industrial production data, infrastructure development, and geopolitical factors affecting base metal prices.",
  },
  {
    title: "Risk Management",
    description:
      "Helping clients manage risks associated with base metal trading by suggesting appropriate position sizes, stop-loss levels, and hedging strategies.",
  },
  {
    title: "Trading Strategies",
    description:
      "Advisors recommend trading strategies tailored to clients' risk tolerance and investment objectives, including directional trades, spread trading, and arbitrage opportunities.",
  },
  {
    title: "Directional Trades",
    description:
      "Buying or selling base metal futures or physical metals based on market trends, price forecasts, and fundamental analysis of supply-demand factors.",
  },
];

export default function BaseMetal() {
  return (
    <StockCashSubscription
      backgroundImage={stockbg}
      mainTitle="Base Metals Trading Service"
      subTitle="Gain an edge in the base metals market with data-driven analysis and updates."
      sectionTitle="Base Metals Trading Service"
      sectionDescription="Base metals subscription services specialize in providing advice and recommendations for trading and investing in non-ferrous metals that are widely used in industrial applications. These metals include copper, aluminum, zinc, lead, nickel, tin, and others."
      services={servicesData}
    />
  );
}
