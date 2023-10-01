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
import ContactsPage from "./pages/contacts/ContactsPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import Whitening from "./pages/services/whitening/Whitening";
import Hygiene from "./pages/services/hygiene/Hygiene";
import BiteCorrection from "./pages/services/bite-correction/BiteCorrection";
import ProstheticsPage from "./pages/services/prosthetics/ProstheticsPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/children-dental" element={<ChildDental />}></Route>
      <Route path="/prices" element={<PricesPage />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/reviews" element={<ReviewsPage />}></Route>
      <Route path="/works" element={<WorksPage />}></Route>
      <Route path="/doctors" element={<DoctorsPage />}></Route>
      <Route path="/clinics" element={<ClinicsPage />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/services/whitening" element={<Whitening />}></Route>
      <Route path="/services/hygiene" element={<Hygiene />}></Route>
      <Route
        path="/services/bite-correction"
        element={<BiteCorrection />}
      ></Route>
      <Route path="/services/teeth-healing" element={<TeethHealing />}></Route>
      <Route path="/services/prosthetics" element={<ProstheticsPage />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
