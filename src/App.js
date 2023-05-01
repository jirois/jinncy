import { useState } from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Footer from "./pages/Footer";
import Team from "./pages/Team";
import CopyRight from "./components/CopyRight";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div>
      <div className="relative bg-hero h-[776px] md:h-[974px] overflow-hidden bg-cover  bg-center bg-no-repeat">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div className="w-[90%] md:w-4/5 mx-auto h-full">
            <Landing
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto h-full">
        <AboutUs />
      </div>
      <div className="w-5/5 bg-light-grey">
        <div className="w-[90%] md:w-4/5 mx-auto h-full">
          <Services />
        </div>
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto h-full">
        <Team />
      </div>
      <div className="w-5/5 bg-footer-grey">
        <div className="w-[90%] md:w-4/5 mx-auto">
          <Footer />
        </div>
      </div>
      <div className="w-5/5 bg-footer-grey">
        <div className="w-[90%] md:w-[85%] mx-auto  py-4 border-t-2">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default App;
