import React from "react";
import Particles from "react-particles-js";
import { TypeAnimation } from "react-type-animation";
import particlesConfig from "../../particlesConfig";

function ParticleAnimation() {
  return (
    <div
      className="App"
      style={{ position: "relative", overflow: "hidden", height: "100vh" }}
    >
      <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <header
        className="App-header relative"
        style={{ justifyContent: "center", top: "40%" }}
      >
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "PRASTUTI",
            1000,
            "IIT BHU",
            1000,
            "ELECTRICAL ENGINEERING",
            1000,
            "TECH FEST",
            1000,
          ]}
          speed={30} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2em" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        {/* <div className="flex min-h-screen min-w-full bg-radial-gradient(circle,#003247 0%, #013147 10%,#013044 20%,#003046 30%,#002f43 70% ,#01273c 90% ,#002639 100%)">
          <div className="z-10  relative flex h-[40rem] w-[40rem] max-w-sm mx-auto overflow-hidden bg-radial-gradient(circle,#003247 0%, #013147 10%,#013044 20%,#003046 30%,#002f43 70% ,#01273c 90% ,#002639 100%)">
            <div className="w-full content-center px-6 py-8 md:px-8">
              <p className="text-xl text-center text-white-600 relative top-1/2">
              </p>
              <div className="flex items-center justify-center mt-4"></div>

              <span
              className="flex justify-center w-5/6 px-4 py-3 font-bold text-center absolute"
              style={{ top: "80%" }}
              >
              </span>
              </div>
              </div>
            </div> */}
      </header>
      <div class="flex relative" style={{ justifyContent: "center", top: "40%" }}>
        <a
          href="/register"
          class="relative z-10 bg-rgba(185,250,255,1) hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-white rounded"
        >
          REGISTER
        </a>
      </div>
    </div>
  );
}

export default ParticleAnimation;
