import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// compomnent ต่างๆ
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// หน้า pages ต่างๆ
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

// test system
import AboutTest from "./test/AboutTest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            {/* หน้าเพจหลักทั้งหมด 4 หน้า */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutTest />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* test pages */}

            {/* หน้าเพจรองทั้งหมด หน้า */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
