import React from "react";

function LegalDisclaimer() {
  return (
    <div>
      <div className="bg-[#fef7e5] p-10">
        <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">
          Legal Disclaimer
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Vertex Markets offers investment research and advisory services. The
          insights and recommendations we provide are based on reliable sources
          and comprehensive analysis.
          <br />
          <br />
          However, all investments carry inherent risks, and past performance is
          not a guarantee of future outcomes. Vertex Markets makes no warranties
          regarding the accuracy, completeness, or timeliness of the information
          shared.
          <br />
          <br />
          Clients are strongly encouraged to perform their own due diligence and
          consult with qualified financial advisors before making any investment
          decisions. Vertex Markets shall not be held responsible for any losses
          or damages arising from the use of our services or reliance on our
          recommendations.
        </p>
      </div>
    </div>
  );
}

export default LegalDisclaimer;
