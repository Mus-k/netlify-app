import { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//import useMediaQuery from "./mediaSize/useMedia";
import Footer from "./pages/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
   //const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">

      <Navbar isTopOfPage={isTopOfPage}
      setSelectedPage={setSelectedPage}
      selectedPage={selectedPage} />

      <section className="sections">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </section>
      <div> <Footer/></div>
     
    </div>
  );
}

export default App;
