import React from 'react'
import ParticleAnimation from './Sponser/ParticleAnimation';

const Intro = () => {
  return (
    <div
      style={{
        background: 'radial-gradient(circle,#003247 0%, #013147 10%,#013044 20%,#003046 30%,#002f43 70% ,#01273c 90% ,#002639 100%)',
      }}
    >
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: "url()" }}
          title="Woman holding a mug"
        ></div>
        <div>
          <div className="mt-5 mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base min-w-[320px] max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
      <button style={{ right: "50%", position: "absolute" }}>Register</button>
      <ParticleAnimation height={"200px"} />
    </div>
  );
}

export default Intro;