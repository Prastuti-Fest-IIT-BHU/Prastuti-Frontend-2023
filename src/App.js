import Home from "./pages/Home/Home"
import Register from "./components/Register/Register";

import SeparateEvent from "./pages/Seperate_Event/Separate_Event";
import eventData from "./pages/Seperate_Event/Eventdata";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import StickyNav from "./components/Navbars/stickyNav";
import StaticNav from "./components/Navbars/staticNav";
import PrastutiTeam from "./components/Team/Teams";
import Error from "./pages/Error/Error"
import Profilepage from "./pages/Profile/profilepage";

import Loader from "./components/Loader/loader";
import Thankyou from "./pages/Thank_You/Thank_you";
// import { Component } from "react";

import Form from "./pages/Form/Form";

export default function App() {
  return (
    <>
      <Router>
        {/* {
          showLoader ? <Loader text={`landing home`}/> : null
        } */}
        <Routes>
          <Route
            path="/"
            element={
              <Home />
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
          <Route
            path="/paper-presentation"
            element={
              <>
                <StickyNav />
                <SeparateEvent data={eventData.paperpresetation} />
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
