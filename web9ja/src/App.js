import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";
import AdsPage from "./pages/adsPage";
import AdPage from "./pages/adPage";
import LoadingSpinner from "./components/loading spinner/Spinner";
import SimpleSnackbar from "./components/snack bar/SnackBar";
import { useContext } from "react";
import UIContext from "./store/ui-context";
import UpdateForm from "./components/auth/update form/Update";

function App() {
  const uiContext = useContext(UIContext);

  return (
    <div className="App">
      {uiContext.loading && <LoadingSpinner />}
      <SimpleSnackbar />
      <UpdateForm />
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
