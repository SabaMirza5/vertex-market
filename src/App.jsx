import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import ServicesPage from "./components/pages/ServicesPage";
import StockFuture from "./components/pages/StockFuture";
import StockOption from "./components/pages/StockOption";
import Commodity from "./components/pages/Commodity";
import Bullions from "./components/pages/Bullions";
import BaseMetal from "./components/pages/BaseMetal";
import Energy from "./components/pages/Energy";
import HniServices from "./components/pages/HniServices";
import RegularPrice from "./components/pages/RegularPrice";
import PremiumPlan from "./components/pages/PremiumPlan";
import UltraPremiumPlan from "./components/pages/UltraPremiumPlan";
import InvesmentTips from "./components/pages/InvesmentTips";
import TradingIntraday from "./components/pages/TradingIntraday";
import LongTermStock from "./components/pages/LongTermStock";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden relative">
        <div className="flex-1 overflow-y-auto h-screen scrollable-content">
          <div className="md:block hidden">
            <TopNav />
          </div>

          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <ScrollToTop />
          <div className="page-transition">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/services/stock-cash" element={<ServicesPage />} />
              <Route path="/services/stock-future" element={<StockFuture />} />
              <Route path="/services/stock-option" element={<StockOption />} />
              <Route path="/services/commodity" element={<Commodity />} />
              <Route path="/services/bullions" element={<Bullions />} />
              <Route path="/services/base-metals" element={<BaseMetal />} />
              <Route path="/services/energy" element={<Energy />} />
              <Route path="/services/hni-services" element={<HniServices />} />
              <Route path="/pricing/regular-plan" element={<RegularPrice />} />
              <Route path="/pricing/premium-plan" element={<PremiumPlan />} />
              <Route
                path="/pricing/ultra-premium-plan"
                element={<UltraPremiumPlan />}
              />
              <Route
                path="/market-tips/investment-tips"
                element={<InvesmentTips />}
              />
              <Route
                path="/market-tips/intraday-trading-tips"
                element={<TradingIntraday />}
              />
              <Route
                path="/market-tips/long-term-stocks"
                element={<LongTermStock />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
