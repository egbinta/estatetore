import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import "./App.css";
import HomeDetails from "./pages/HomeDetails";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import AppState from "./context/AppState";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppState>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/homeDetails/:externalId" element={<HomeDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </AppState>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
