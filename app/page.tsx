"use client";

import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import App from "./pages/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-roboto">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
