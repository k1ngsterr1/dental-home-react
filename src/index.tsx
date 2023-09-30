import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./App";
import TeethHealing from "./pages/services/teeth-healing/TeethHealing";
import ChildDental from "./pages/children-dental/ChildrenDental";
import PricesPage from "./pages/prices/PricesPage";
import Privacy from "./pages/privacy/PrivacyPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import WorksPage from "./pages/works/worksPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/teeth-healing" element={<TeethHealing />}></Route>
      <Route path="/children-dental" element={<ChildDental />}></Route>
      <Route path="/prices" element={<PricesPage />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/reviews" element={<ReviewsPage />}></Route>
      <Route path="/works" element={<WorksPage />}></Route>
      <Route path="/doctors" element={<DoctorsPage />}></Route>
      <Route path="/clinics" element={<ClinicsPage />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
