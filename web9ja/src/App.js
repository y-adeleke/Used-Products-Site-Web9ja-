import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";
import AdsPage from "./pages/adsPage";
import AdPage from "./pages/adPage";
import LoadingSpinner from "./components/global helper/loading spinner/Spinner";
import SimpleSnackbar from "./components/global helper/snack bar/SnackBar";
import { useContext } from "react";
import UIContext from "./store/ui-context";
import GlobalFormPage from "./pages/globalFormPage";
import ProtectedRoute from "./protected routes/ProtectedRoute";
import { useLocation } from "react-router-dom";

function App() {
  const uiContext = useContext(UIContext);
  const location = useLocation();

  const path = location.pathname;

  return (
    <div className="App">
      {uiContext.loading && path !== "/" && path !== "/auth" && <LoadingSpinner />}
      <SimpleSnackbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/ads/adform" element={<ProtectedRoute element={<GlobalFormPage />} />} />
        <Route path="/ad/:id" element={<AdPage />} />
      </Routes>
    </div>
  );
}

export default App;
//slow---remove videos
//search not working anymore ...fix
