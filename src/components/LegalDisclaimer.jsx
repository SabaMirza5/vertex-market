import React from "react";

function LegalDisclaimer() {
  return (
    <div>
      <div className="bg-[#fef7e5] md:p-10 p-7">
        <p className="text-[#1da1f2] font-semibold uppercase tracking-wider mb-2">
          Legal Disclaimer
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 md:text-base text-sm">
        Vertex Markets provides investment research and advisory services grounded in credible data and in-depth analysis. Our insights and recommendations are designed to support informed investment decisions and strategic financial planning.
          <br />
          <br />
         While we ensure accuracy and reliability in our research, all investments involve inherent risks, and past performance does not guarantee future outcomes. Vertex Markets makes no warranties regarding the completeness or timeliness of the information provided.
          <br />
          <br />
         Clients are strongly advised to conduct their own due diligence and seek guidance from qualified financial advisors before making investment decisions. Vertex Markets shall not be held responsible for any losses or damages resulting from the use or reliance on our services and recommendations.
        </p>
      </div>
    </div>
  );
}

export default LegalDisclaimer;
