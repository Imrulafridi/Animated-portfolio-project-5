import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Notfound from "./Components/Pages/Notfound"
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/> }/>
          <Route path="/projects" element={ <Projects/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={ <Notfound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
