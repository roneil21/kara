import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { Amenities } from "./components/pages/Amenities";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/kara" exact element={<Home />} />
          <Route path="/kara/amenities" element={<Amenities />} />
          <Route path="/kara/about" element={<About />} />
          <Route path="/kara/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
