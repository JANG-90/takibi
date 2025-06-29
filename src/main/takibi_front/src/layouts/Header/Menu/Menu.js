import "./Menu.css"; // 파일 경로에 맞게 수정
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Magazine from "../Pages/Magazine";
import Gear from "../Pages/Gear";
import CampSite from "../Pages/CampSite";
import CampFood from "../Pages/CampFood";
import Community from "../Pages/Community";
import TermsofService from "../Pages/TermsofService";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import PersonalizedAdvertisingTerms from "../Pages/PersonalizedAdvertisingTerms";
import VariousTermsandConditions from "../Pages/VariousTermsandConditions";
import Scta from "../Pages/Scta";
import FeedbackandRequests from "../Pages/FeedbackandRequests";

const Menu = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Gear" element={<Gear />} />
        <Route path="/CampSite" element={<CampSite />} />
        <Route path="/CampFood" element={<CampFood />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/TermsofService" element={<TermsofService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/PersonalizedAdvertisingTerms" element={<PersonalizedAdvertisingTerms />} />
        <Route path="/VariousTermsandConditions" element={<VariousTermsandConditions />} />
        <Route path="/Scta" element={<Scta />} />
        <Route path="/FeedbackandRequests" element={<FeedbackandRequests />} />
      </Routes>
    </div>
  );
};

export default Menu;
