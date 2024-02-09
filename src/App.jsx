import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Details from "./pages/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
import { BookContextProvider } from "./context";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <BookContextProvider>
          <Headroom>
            <Navbar />
          </Headroom>
          <Routes>
            <Route path="/MSLbooks/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MSLbooks/details/:bookid" element={<Details />} />
          </Routes>
          <Footer />
        </BookContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
