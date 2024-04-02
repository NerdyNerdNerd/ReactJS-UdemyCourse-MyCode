import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Instructors />
      <Contact />
      <NotFound />
      <Footer />
      
    </div>
  );
}

export default App;
