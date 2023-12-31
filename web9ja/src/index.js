import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { UserContextProvider } from "./store/user-context";
import { UIContextProvider } from "./store/ui-context";
import { AdsContextProvider } from "./store/ads-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <UserContextProvider>
        <AdsContextProvider>
          <AuthContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthContextProvider>
        </AdsContextProvider>
      </UserContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
