import React from "react";
import videobg from "../../assets/bgvideo1.mp4";
import { TypeAnimation } from "react-type-animation";
const Intro = () => {
  return (
    <>
      <div className="flex justify-center align-center flex-wrap overflow-hidden ">
        <video
          src={videobg}
          autoPlay
          muted
          loop
          className="absolute t-0 l-0 w-[100%] h-[100%] z-[-10] object-cover opacity-30"
        />
        {/* <h1 className='aboutHead'>About Us</h1>
      <h4 class="aboutPara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</h4> */}
        <div className="flex flex-col h-[100vh] w-[100vw] bg-black/10">
          <p className="text-3xl text-center grow md:grow-0 place-content-evenly md:text-left text-white relative sm:mt-10 lg:mt-20 mr-2 ml-2 min-h-max font-bold p-6 lg:px-12">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "PRASTUTI",
                1000,
                "IIT BHU",
                800,
                "ELECTRICAL ENGINEERING",
                800,
                "TECH FEST",
                800,
              ]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </p>
          <div className="grow md:grow-0 flex flex-col">
            <p className="flex hidden md:flex text-left text-lg mr-2 ml-2 px-6 lg:px-12 py-4 text-white lg:max-w-screen-lg text-justify break-none">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
            </p>
            <div className="flex justify-content p-4">
              <button
                className="mt-8 mb-4 m-auto text-white border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#ffffff] hover:text-gray-700 hover:font-bold font-Catamaran
                  "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
