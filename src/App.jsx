import { useState } from "react";
import "./App.css";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Sidebar />
          <MainSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;