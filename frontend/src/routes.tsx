import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import FeaturesPage from "./pages/FeaturesPage";
import Contact from "./pages/Contact";
import FAQsPage from "./pages/FAQsPage";

const AppRouter = ()=>{
return (
    <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/get-started" element={<GetStarted />} />
         <Route path="/faq" element={<FAQsPage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/features" element={<FeaturesPage />} />
    </Routes>
)
}
export default AppRouter;