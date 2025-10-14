import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden relative">
        <div className="flex-1 overflow-y-auto h-screen">
          <div className="md:block hidden">
            <TopNav />
          </div>
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <div className="">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              {/* <Route exact path="/live" element={<Live />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
