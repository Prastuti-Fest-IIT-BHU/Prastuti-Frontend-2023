import "./global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Events from "./components/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
