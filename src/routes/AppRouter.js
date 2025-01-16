import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import AddCaption from "../components/AddCaption";
import TopBarComponent from "../components/TopBarComponent";

const AppRouter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Router>
        <TopBarComponent />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-caption/:id" element={<AddCaption />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
