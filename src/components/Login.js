import React from "react";



const Login = () => {
  return (
    <div className="relative flex-center  py-16   h-screen bg-[url('/src/assets/wave-haikei.svg')] bg-no-repeat bg-cover bg-center">
      
      <div className="container  absolute m-auto px-6 text-gray-500  md:px-12 xl:px-40 ">
        <div className="m-auto  md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="p-8 py-12 sm:p-16 ">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                  Login to your <br />
                  account.
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                  <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google absolute left-0 w-5"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                    </svg>
                    <span >Continue with Google</span>
                  </span>
                </button>
              </div>

              <div className="mt-32 space-y-4 text-center text-gray-600 dark:text-gray-400 sm:-mb-8">
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the
                  <a href="/" className="underline">
                    Google Privacy Policy
                  </a>{" "}
                  and
                  <a href="/" className="underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
