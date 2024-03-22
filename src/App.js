import "./App.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Kalendar from "./pages/Navike/Kalendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import O_nama from "./pages/O_nama/O_nama";
import Citati from "./Citati";
import Footer from "./components/Footer";
import Selfi from "./pages/Selfi/Selfi";
import Citat from "./pages/Citat/Citat";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/o_nama" element={<O_nama />}/>
          
          
          <Route path="/citati" element={<Citati />}/>
            
          <Route path="/" element={<Kalendar />}/>
          <Route path="/selfi" element={<Selfi />}/>
          <Route path="/citat" element={<Citat />}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
