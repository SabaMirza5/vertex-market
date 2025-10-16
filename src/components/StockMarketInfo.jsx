import React from "react";

const StockMarketInfo = ({
  title,
  welcomeTitle,
  welcomeDescription,
  whyChooseTitle,
  whyChoosePoints,
  marketOpportunityTitle,
  marketOpportunityDescription,
  keyHighlightsTitle,
  keyHighlightsPoints,
  disclaimerTitle,
  disclaimerText,
  disclaimerTitle2,
  disclaimerText2,
  disclaimerTitle3,
  disclaimerText3,
  disclaimerTitle4,
  disclaimerText4,
  titleBelow,
  welcomeTitleBelow,
  welcomeDescriptionBelow,
  whyChooseTitleBelow,
  whyChoosePointsBelow,
}) => {
  return (
    <div className="md:p-10 p-5 space-y-6 bg-white">
      <div>
        <h1 className="md:text-5xl text-2xl text-center mb-10 font-bold text-[#052365]">
          {title}
        </h1>
        <h2 className="md:text-3xl text-xl font-semibold mt-2">
          {welcomeTitle}
        </h2>
        <p className="text-gray-700 mt-2 md:text-base text-sm">
          {welcomeDescription}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-5">
          {whyChooseTitle}
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-6 md:text-base text-sm">
          {whyChoosePoints.map((point, index) => (
            <li key={index}>
              <span className="font-semibold text-[#052365] bg-blue-50  md:p-2 p-1">
                {point.title}
              </span>{" "}
              {point.description}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600">
          {marketOpportunityTitle}
        </h3>
        <p className="text-gray-700 mt-2 md:text-base text-sm">
          {marketOpportunityDescription}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600">
          {keyHighlightsTitle}
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 md:text-base text-sm">
          {keyHighlightsPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="md:text-5xl text-2xl text-center mb-10 font-bold text-[#052365]">
          {titleBelow}
        </h1>
        <h2 className="md:text-3xl text-xl font-semibold mt-2">
          {welcomeTitleBelow}
        </h2>
        <p className="text-gray-700 mt-2 md:text-base text-sm">
          {welcomeDescriptionBelow}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-5">
          {whyChooseTitleBelow}
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-6 md:text-base text-sm">
          {whyChoosePointsBelow.map((point, index) => (
            <li key={index}>
              <span className="font-semibold text-[#052365] bg-blue-50  md:p-2 p-1">
                {point.title}
              </span>{" "}
              {point.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md  mt-4 bg-[#f9f9f9] p-4">
        <h4 className="font-semibold text-blue-600">{disclaimerTitle}</h4>
        <p className="text-gray-600 md:text-base text-sm mt-1">
          {disclaimerText}
        </p>
      </div>

      <div className="rounded-md  mt-4 bg-[#f9f9f9] p-4">
        <h4 className="font-semibold text-blue-600">{disclaimerTitle}</h4>
        <p className="text-gray-600 md:text-base text-sm mt-1">
          {disclaimerText}
        </p>
      </div>

      <div className="rounded-md  mt-4 bg-[#f9f9f9] p-4">
        <h4 className="font-semibold text-blue-600">{disclaimerTitle2}</h4>
        <p className="text-gray-600 md:text-base text-sm mt-1">
          {disclaimerText2}
        </p>
      </div>

      <div className="rounded-md  mt-4 bg-[#f9f9f9] p-4">
        <h4 className="font-semibold text-blue-600">{disclaimerTitle3}</h4>
        <p className="text-gray-600 md:text-base text-sm mt-1">
          {disclaimerText3}
        </p>
      </div>

      <div className="rounded-md  mt-4 bg-[#f9f9f9] p-4">
        <h4 className="font-semibold text-red-600">{disclaimerTitle4}</h4>
        <p className="text-gray-600 md:text-base text-sm mt-1">
          {disclaimerText4}
        </p>
      </div>
    </div>
  );
};

export default StockMarketInfo;
