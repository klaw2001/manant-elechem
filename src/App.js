import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Header/Topbar";
import Navbar from "./components/Header/NavbarX";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import TermsComp from "./pages/TermsComp";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="">
      <Router>
        <header className="position-relative">
          <Topbar />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/terms-and-conditions" element={<TermsComp/>}/>
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
