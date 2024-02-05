import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pomodorotimer from "../src/compoents/pomodorotimer";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.NODE_ENV === "production" ? "/subdirectory" : ""}>
        <Routes>
          <Route path="/pomodorotimer" element={<Pomodorotimer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
