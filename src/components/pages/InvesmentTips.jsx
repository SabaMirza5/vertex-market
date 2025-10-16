import React from "react";
import StockMarketInfo from "../StockMarketInfo";

const InvesmentTips = () => {
  return (
    <StockMarketInfo
      title="Smart Investment Strategies for India’s Growing Stock Market"
      welcomeTitle="Welcome to Vertex Markets: Empowering Your Financial Journey"
      welcomeDescription="At Vertex Markets, we specialize in guiding investors through the ever-evolving world of the Indian stock market. With our expert insights, advanced tools, and personalized support, we help you turn market opportunities into sustainable financial growth. Whether you’re a beginner or an experienced trader, Vertex Markets is your trusted partner for informed and confident investing."
      whyChooseTitle="Why Partner with Vertex Markets?"
      whyChoosePoints={[
        {
          title: "Market Expertise:",
          description:
            "Our analysts bring years of experience and in-depth understanding of India’s financial markets.",
        },
        {
          title: "Personalized Strategies:",
          description:
            "We tailor investment plans based on your goals, risk profile, and market outlook.",
        },
        {
          title: "Comprehensive Learning:",
          description:
            "Access research reports, training sessions, and expert-led webinars to sharpen your skills.",
        },
        {
          title: "Innovative Technology:",
          description:
            "Trade efficiently with cutting-edge platforms designed for speed, accuracy, and reliability.",
        },
      ]}
      marketOpportunityTitle="Exploring the Indian Stock Market Potential"
      marketOpportunityDescription="India’s stock market is one of the fastest-growing in the world, powered by economic reforms, digital innovation, and expanding investor participation. The National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) serve as key gateways to this dynamic ecosystem—offering a vast range of opportunities for both long-term investors and short-term traders."
      keyHighlightsTitle="Key Insights into Market Growth"
      keyHighlightsPoints={[
        "India’s strong GDP growth supports consistent market expansion.",
        "Rising investor participation driven by increased financial awareness.",
        "Government initiatives boosting infrastructure and manufacturing sectors.",
        "Technology and fintech innovations accelerating market accessibility.",
      ]}
      welcomeTitleBelow="Educate Yourself: Understanding the Indian Market Basics"
      welcomeDescriptionBelow="Investing without proper knowledge is like entering the battlefield without armor.
At Vertex Market, we believe that education is the foundation of confident and successful investing."
      whyChooseTitleBelow="Key Market Terminology"
      whyChoosePointsBelow={[
        {
          title: "BSE (Bombay Stock Exchange):",
          description:
            "Established in 1875, it’s Asia’s oldest stock exchange.",
        },
        {
          title: "NSE (National Stock Exchange)",
          description:
            "India’s largest and most active exchange by trading volume.",
        },
        {
          title: "Sensex",
          description:
            "The BSE’s benchmark index, representing 30 major companies across key sectors.",
        },
        {
          title: "Nifty 50:",
          description:
            "The NSE’s flagship index, tracking 50 leading large-cap stocks.",
        },

        {
          title: "Demat Account:",
          description:
            "A digital account that securely holds your shares and securities.",
        },

        {
          title: "Trading Account:",
          description: "Used to execute buy and sell orders in the market.",
        },
      ]}
      disclaimerTitle="Market Mechanics"
      disclaimerText="Trading Hours Indian equity markets operate Monday to Friday, from 9:15 AM to 3:30 PM (IST).Settlement Cycle Follows a T+1 settlement system, meaning trades are settled the next business day."
      disclaimerTitle2="Vertex Market Advantage"
      disclaimerText2="At Vertex Market, we don’t just give you trading tools — we empower you with knowledge.
Our platform offers:
Easy-to-understand educational guides and tutorials
Real-time market data and analysis
Expert insights to help you navigate the stock market confidently
A community-driven approach for continuous learning
Empower your investment journey — Learn. Trade. Grow with Vertex Market."
      disclaimerTitle3="Regulatory Framework"
      disclaimerText3="The Securities and Exchange Board of India (SEBI) oversees and regulates the market to ensure:
Transparent and fair trading practices
Investor protection and grievance management
Market integrity and efficiency
Strong corporate governance standards"
      disclaimerTitle4="Disclaimer"
      disclaimerText4="Market investments are subject to risks, including possible loss of capital. The information provided by Vertex Markets is for educational and informational purposes only and should not be considered as personalized financial advice. We encourage investors to perform due diligence and consult a licensed financial advisor before making any investment decisions."
    />
  );
};

export default InvesmentTips;
