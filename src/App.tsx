import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "templates/NotFound";
import AllReservation from "templates/AllReservations";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<AllReservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
