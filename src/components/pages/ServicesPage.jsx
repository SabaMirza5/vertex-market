
import React from "react";
import bgimg from "/bgimg.jpg";
import StockCashSubscription from "../StockCashSubscription";

const servicesData = [
  {
    title: "Stock Selection",
    description:
      "Analyzing stocks based on fundamental and technical analysis to identify investment opportunities with high growth potential and sustainable returns.",
    color: "text-orange-600",
  },
  {
    title: "Investment Advice",
    description:
      "Providing recommendations on when to buy, sell, or hold stocks based on market trends, company performance, and economic indicators.",
    color: "text-orange-600",
  },
  {
    title: "Risk Management",
    description:
      "Advising on risk mitigation strategies, diversification techniques, and optimal allocation of funds among different stocks and sectors.",
    color: "text-orange-600",
  },
  {
    title: "Market Insights",
    description:
      "Offering deep insights into market trends, economic factors, sector-specific analysis, and emerging opportunities.",
    color: "text-orange-600",
  },
];

export default function ServicesPage() {
  return (
    <StockCashSubscription
      backgroundImage={bgimg}
      mainTitle="Stock Cash Subscription Service"
      subTitle="Your Gateway to Smarter and More Confident Future Trading"
      sectionTitle="Stock Cash Subscription Service"
      sectionDescription="Stock cash subscription services provide expert guidance and recommendations for trading in the cash segment of the stock market. These services typically include comprehensive analysis, strategic advice, and ongoing support to help investors make informed decisions."
      services={servicesData}
    />
  );
}
