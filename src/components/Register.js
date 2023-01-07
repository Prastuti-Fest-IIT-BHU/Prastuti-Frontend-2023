import React from "react";
import image from "../assets/Register/logo.png";
import style from "../assets/Register/style.css"

const Register = () => {
  return (
    <div className="main relative bg-no-repeat bg-cover h-screen light-gradient bg-center">
      <span className="absolute flex align-middle justify-center h-screen">
        <svg class="blob absolute justify-center align-middle" width={900} height={900} viewBox="0 0 450 450" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(225,250)">
            <path fill="#003247" d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" />
          </g>
        </svg>
      </span >
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="absolute z-10 flex h-[37rem] w-[22rem] sm:w-[30rem] mt-30 bg-[#DBF2FF] mx-auto shadow-2xl shadow-dark-neon-tint rounded-lg bg-opacity-65 lg:max-w-4xl">          <div className="absolute w-full content-center p-6 md:px-8 ">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Brand
            </h2>
            <p className="text-xl text-center text-gray-600">
              Welcome back!
            </p>
            <div className="flex items-center justify-center mt-4">
              <img src={image} alt="logo" className="w-[25rem] h-[25rem] " />
            </div>
            <a
              href="#"
              className="flex items-center justify-center mt-4 bg-[#003247] text-[#DBF2FF] transition-colors duration-300 transform border rounded-lg hover:bg-[#DBF2FF] hover:text-[#003247] hover:border-[#003247] focus:outline-none focus:bg-[#DBF2FF] focus:text-[#003247] focus:border-[#003247]"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <span className="align-top justify-center w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
