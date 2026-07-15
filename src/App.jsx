import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Images from "./pages/Images.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "images" && <Images />}
      <Footer />
    </>
  );
}
