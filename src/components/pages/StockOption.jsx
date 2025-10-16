

import React from "react";
import stockoption from "/stockoption.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Option Strategy Selection",
    description:
      "Analyzing market conditions, volatility levels, and price movements to recommend appropriate option strategies including calls, puts, spreads, and combinations.",
  },
  {
    title: "Risk Management",
    description:
      "Advising on risk mitigation strategies, including the use of options to hedge against downside risk and protect existing positions.",
  },
  {
    title: "Market Analysis",
    description:
      "Providing in-depth analysis of underlying stocks or indices, implied volatility, and Greeks (delta, gamma, theta, vega) for informed decision making.",
  },
  {
    title: "Execution Timing",
    description:
      "Recommending the optimal timing of option trades based on market conditions, technical analysis, and volatility patterns.",
  },
];

export default function StockOption() {
  return (
    <StockCashSubscription
      backgroundImage={stockoption}
      mainTitle="Stock Option Subscription Service"
      subTitle="Empower your trading with expert option insights and premium signals"
      sectionTitle="Stock Option Subscription Service"
      sectionDescription="Stock and index option subscription services provide expert advice and recommendations for trading in options contracts of individual stocks or stock indices. These services offer comprehensive support for options trading strategies and advanced risk management techniques."
      services={servicesData}
    />
  );
}
