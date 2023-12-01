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

function App() {
  const uiContext = useContext(UIContext);

  return (
    <div className="App">
      {uiContext.loading && <LoadingSpinner />}
      <SimpleSnackbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/adpage" element={<AdPage />} />
        <Route path="/ad:id" element={<ProtectedRoute element={<AdPage />} />} />
        <Route path="/ads/adform" element={<ProtectedRoute element={<GlobalFormPage />} />} />
      </Routes>
    </div>
  );
}

export default App;
