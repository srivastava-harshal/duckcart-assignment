import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Creator from "./components/Creator";
import Creators from "./components/Creators";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/all-creators" element={<Creators />} />
          <Route path="/all-creators/:id" element={<Creator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
