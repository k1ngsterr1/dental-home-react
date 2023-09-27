import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./App";
import TeethHealing from "./pages/services/teeth-healing/TeethHealing";
import ChildDental from "./pages/children-dental/page";
import PricesPage from "./pages/prices/page";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/teeth-healing" element={<TeethHealing />}></Route>
      <Route path="/child-dental" element={<ChildDental />}></Route>
      <Route path="/prices" element={<PricesPage />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
