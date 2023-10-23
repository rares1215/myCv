import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllMyWork } from "./projects/AllMyWork";
import HomeRoute from "./HomeRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/AllMyWork" element={<AllMyWork />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
