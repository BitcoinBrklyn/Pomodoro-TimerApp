import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pomodoro from "../src/compoents/pomodoro";
import Pomodorotimer from "../src/compoents/pomodorotimer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/pomodoro" element={<Pomodoro />} /> */}
          <Route path="/pomodorotimer" element={<Pomodorotimer />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
