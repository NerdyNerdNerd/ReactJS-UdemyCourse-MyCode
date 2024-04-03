import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Personnel from "./pages/Personnel"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import PersonnelDetail from "./pages/PersonnelDetail"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/personnel/:id" element={<PersonnelDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
