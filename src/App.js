import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Header/Topbar";
import Navbar from "./components/Header/NavbarX";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

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
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
