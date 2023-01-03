import React from "react";
import image from "../assets/logo.png";
import cmp from "../assets/computer.jpg";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Events = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
    <div style={{backgroundImage:{cmp}}}>
      <motion.div
        class="pt-2 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
        style={{color:"#29ffff"}}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfbfxfvfdvdfv
                </h3>
                <p class="mt-2">fbfbfbgbbgbgfbgffbggxvxvcxv</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkdsvdfbdfbdbdfbsfsrggdgdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="pt-6 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfb
                </h3>
                <p class="mt-2">fbfbfbgb</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="pt-6 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfb
                </h3>
                <p class="mt-2">fbfbfbgb</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="pt-6 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfb
                </h3>
                <p class="mt-2">fbfbfbgb</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="pt-6 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfb
                </h3>
                <p class="mt-2">fbfbfbgb</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        class="pt-6 pb-12 bg-gray-300"
        variants={boxVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
            Prastuti
          </h2>
          <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={image}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">
                  fvfvfbfb
                </h3>
                <p class="mt-2">fbfbfbgb</p>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  jdsbjkds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="progress"
        style={{
          scaleX,
          position: "fixed",
          left: "0",
          right: "0",
          height: "5px",
          backgroundColor: "black",
          bottom: "10px",
        }}
      />
      </div>
    </>
  );
};

export default Events;
