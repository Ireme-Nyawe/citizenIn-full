import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import FeaturesPage from "./pages/FeaturesPage";
import Contact from "./pages/Contact";
import FAQsPage from "./pages/FAQsPage";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Logout from "./components/dashboard/Logout";
import Categories from "./pages/dashboard/admin/Categories";
import Institutions from "./pages/dashboard/admin/Institutions";
import AgencyMembers from "./pages/dashboard/admin/AgencyMembers";
import Complaints from "./pages/dashboard/citizen/Complaints";
import AgencyComplaints from "./pages/dashboard/agency/AgencyComplaints";
import CitizenEngagementDashboard from "./components/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/faq" element={<FAQsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/logout" element={<Logout />} />
      {/* logged */}
      <Route element={<ProtectedRoute />}>
        {/* admin */}
        <Route path="/dashboard/admin" element={<DashboardLayout />}>
        <Route index={true} element={<CitizenEngagementDashboard />} />
        <Route path="categories" element={<Categories/>}/>
        <Route path="institutions" element={<Institutions/>}/>
        <Route path="users" element={<AgencyMembers/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        {/* agency */}
        <Route path="/dashboard/agency" element={<DashboardLayout />}>
        <Route index={true} element={<CitizenEngagementDashboard />} />
        <Route path="complaints" element={<AgencyComplaints/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        {/* citizen */}
        <Route path="/dashboard/citizen" element={<DashboardLayout />}>
        <Route index={true} element={<CitizenEngagementDashboard />} />
        <Route path="complaints" element={<Complaints/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRouter;
