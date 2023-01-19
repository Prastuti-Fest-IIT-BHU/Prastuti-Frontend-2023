import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./Intro.css"
const Intro = () => {
  return (
    <>
      <div className="flex justify-center align-center flex-wrap overflow-hidden IntroContainer ">
        {/* <video
          src={videobg}
          autoPlay
          muted
          loop
          className="absolute t-0 l-0 w-[100%] h-[100%] z-[-10] object-cover opacity-30"
        /> */}
        <div className="flex flex-col md:h-[100vh] w-[100vw] bg-black/10">
          <p className="text-3xl text-center grow md:grow-0 place-content-evenly md:text-left text-white relative sm:mt-10 lg:mt-20 mr-2 ml-2 min-h-max font-bold p-6 lg:px-12 IntroHeading">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "PRASTUTI'23",
                1000,
                "IIT BHU",
                800,
                "ELECTRICAL (EEE)",
                800,
                "TECH FEST",
                800,
              ]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em" }}
              className="movingText"
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </p>
          <div className="grow md:grow-0 flex flex-col">
            <p className="flex md:flex text-left text-lg mr-2 ml-2 px-6 lg:px-12 py-4 text-white lg:max-w-screen-lg text-justify break-none intro IntroPara">
              Electrical Department of IIT (BHU) Varanasi presents PRASTUTI, the
              annual technical festival that echoes the spirit of innovation and
              progress! This gives you a chance to get your feet wet in a wide
              array of domains, ranging from image processing and simulation to
              web development and designing circuits. Whether you're a newbie or
              a know-it-all, Prastuti is here to soak you in its technical
              extravaganza. With stellar workshops straight from the experts,
              the seeds of understanding sprout in your mind, which are further
              watered by the electrifying competitions with handsome prizes!
              This not only helps polish your engineering prowess but gives you
              a first-hand experience of the modern industry requirements.
              Moreover, there are some iconic Guest talks to blow your mind and
              to keep the flames of advancement ignited! So, are you ready to
              reconstruct the era of technological renaissance with
              Prastuti'23?
            </p>

            <div className="flex justify-center justify-content p-4">

              {localStorage.getItem("loginData") ?null: (
                <Link to="/login">
                  <button className="linkBtn">Register</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
