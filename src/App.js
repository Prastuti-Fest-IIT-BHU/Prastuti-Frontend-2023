import Testimonial from "./components/Testimonial/Testimonial";
import Register from "./components/Register";

import Faq from "././components/Faq";
import About from "./components/About";
import SeparateEvent from "./components/Separate_Event";
import eventData from "./components/Eventdata";
import Events from "./components/Events"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import StickyNav from "./components/Navbars/stickyNav";
import StaticNav from "./components/Navbars/staticNav";
import PrastutiTeam from "./components/Team/Teams";
import Error from "./components/Error"
import Profilepage from "./pages/profile/profilepage";

import Intro from "./components/Intro/Intro";
import Sponsor from "./components/Sponsor"

import Thankyou from "./components/Thank_you";
// import { Component } from "react";

import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StickyNav />
                <Intro />
                <About/>
                <Events/>
                <Faq />
                <Testimonial />
                <Sponsor/>               
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <StickyNav />
                <Register />
              </>
            }
          ></Route>
          <Route
            path="/codigo"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.codigo} />
              </>
            }
          ></Route>
          <Route
            path="/hackoverflow"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.hackoverflow} />
              </>
            }
          ></Route>
          <Route
            path="/recognizance"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.recognizance} />
              </>
            }
          ></Route>
          <Route
            path="/simulim"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.simulim} />
              </>
            }
          ></Route>
          <Route
            path="/consilium"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.consilium} />
              </>
            }
          ></Route>
          <Route path="/thankyou" element={
            <Thankyou />
          }></Route>
          <Route
            path="/oscillion"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.oscillion} />
              </>
            }
          ></Route>
          <Route path="/login" element={
            <>
              <StickyNav />
              <Register />
            </>
          }></Route>
          <Route path="/team" element={
            <>
              <StickyNav />
              <PrastutiTeam />
            </>
          }></Route>
          <Route
            path="/form"
            element={
              <>
                <StaticNav />
                <Form />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <Error />
            }
          />
          <Route path="/profile" element={
            <>
              <StickyNav />
              <Profilepage />
            </>
          }></Route>
        </Routes>
        {/* <Footer /> */}

      </Router>
    </>
  );
}
