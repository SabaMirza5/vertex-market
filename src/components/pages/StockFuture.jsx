

import React from "react";
import stockbg from "/stockbg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Market Analysis",
    description:
      "Analyzing market trends, economic indicators, and geopolitical factors affecting futures prices with advanced technical and fundamental analysis.",
  },
  {
    title: "Strategy Development",
    description:
      "Designing trading strategies based on technical analysis, chart patterns, market sentiment, and volatility patterns.",
  },
  {
    title: "Risk Management",
    description:
      "Advising on risk mitigation strategies, position sizing, and hedging techniques using futures contracts effectively.",
  },
  {
    title: "Market Insights",
    description:
      "Offering insights into sector-specific developments and their impact on futures prices and market dynamics.",
  },
];

export default function StockFuture() {
  return (
    <StockCashSubscription
      backgroundImage={stockbg}
      mainTitle="Stock Future Subscription Service"
      subTitle="Unlock Strategic Opportunities and Maximize Returns in the Futures Market"
      sectionTitle="Stock Future Subscription Service"
      sectionDescription="Stock and index future subscription services offer specialized advice and recommendations for trading in futures contracts of individual stocks or stock indices. These services provide comprehensive support for futures trading strategies and risk management."
      services={servicesData}
    />
  );
}
