import React from "react";
import { Toaster } from "sonner";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
      <Toaster richColors position="top-center" />
    </BrowserRouter>
  );
};

export default App;
