import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import FeaturesPage from "./pages/FeaturesPage";
import Contact from "./pages/Contact";
import FAQsPage from "./pages/FAQsPage";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/faq" element={<FAQsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<FeaturesPage />} />
      {/* logged */}
      <Route element={<ProtectedRoute />}>
        {/* admin */}
        <Route path="/dashboard/admin" element={<DashboardLayout />}>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        {/* agency */}
        <Route path="/dashboard/agency" element={<DashboardLayout />}>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        {/* citizen */}
        <Route path="/dashboard/citizen" element={<DashboardLayout />}>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRouter;
