import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./src/errorBoundary";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { UserProvider } from "./src/contexts/userContext";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
