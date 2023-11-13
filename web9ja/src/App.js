import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";
import AdsPage from "./pages/adsPage";
import AdPage from "./pages/adPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/ad" element={<AdPage />} />
      </Routes>
    </div>
  );
}

export default App;
