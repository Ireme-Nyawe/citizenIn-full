import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
