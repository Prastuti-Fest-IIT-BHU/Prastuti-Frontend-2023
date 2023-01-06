import Sponsor from "./components/Sponser/Sponsor";
import Register from "./components/Register";
import Teams from "./components/Teams";
import Faq from "././components/Faq";
import About from "./components/About";
import SeparateEvent from "./components/Separate_Event";
import eventData from "./components/Eventdata";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrastutiTeam from "./components/Team/Teams";
import Intro from "./components/Intro";

import Form from "./components/Form.jsx";

export default function App() {
  return (
    <>
      <Router>
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Register />
                <Teams />
                <Faq />
                <Sponsor />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/codigo"
            element={<SeparateEvent data={eventData.codigo} />}
          ></Route>
          <Route
            path="/hackoverflow"
            element={<SeparateEvent data={eventData.hackoverflow} />}
          ></Route>
          <Route
            path="/recognizance"
            element={<SeparateEvent data={eventData.recognizance} />}
          ></Route>
          <Route
            path="/simulim"
            element={<SeparateEvent data={eventData.simulim} />}
          ></Route>
          <Route
            path="/consilium"
            element={<SeparateEvent data={eventData.consilium} />}
          ></Route>
          <Route
            path="/oscillion"
            element={<SeparateEvent data={eventData.oscillion} />}
          ></Route>
          <Route path="/login" element={<Register />}></Route>
          <Route path="/team" element={<PrastutiTeam />}></Route>
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}
