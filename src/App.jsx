import "./App.css";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/burgur" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
