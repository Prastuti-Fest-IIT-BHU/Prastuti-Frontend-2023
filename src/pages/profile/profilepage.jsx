import React, { useState } from "react";
import "./profilecss.css";
import Profileteam from "./profileteam";
import Profilerequest from "./Profilerequest";
import Profileevent from "./profileevent";
import Footer from "../../components/Footer";
const Profilepage = () => {
  const [value, setvalue] = useState(<Profileevent />);
  const [addclass, setaddclass] = useState(["onclicknav", "", ""]);

  function handleevent(data) {
    if (data === 0) {
      const input = ["onclicknav", "", ""];
      setaddclass(input);
    }
    if (data === 1) {
      const input = ["", "onclicknav", ""];
      setaddclass(input);
    }
    if (data === 2) {
      const input = ["", "", "onclicknav"];
      setaddclass(input);
    }
  }


  return (
    <>
      <div className="profilecontainer">
        <div className="page px-0 md:px-10 z-10">
          <div id="back-card" className="md:rounded-b-xl h-[160px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url("/profile/firewatchbg.png")` }}>
            <div className="min-w-full md:rounded-b-xl h-[160px] -mb-4 bg-black/60"></div>
          </div>
          {/* <img src={profileback} className=" relative -mb-36 object-cover opacity-90" /> */}
          <div className="myprofile -mt-12 flex flex-col md:flex-row">
            <div className="profilechild imgprofile"><img className="imgprofile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" /></div>
            <div className="profilechild">
              <div className="Prodetails text-3xl font-bold text-black-900">Rahul Kumar Sonkar</div>
              <div className="Prodetails hidden md:flex text-l font-normal text-black-900">ankit.kumarnishad.eee20@itbhu.ac.in</div>

            </div>
          </div>

        </div>
        <div>

        </div>
        <div className="pb-2 m-2 flex flex-col lg:items-center lg:flex-row lg:px-10">
          <div className="about-user lg:min-h-[40vh] m-2 p-2 bg-sky-50 rounded-2xl flex flex-col lg:w-4/12">
            
            <p className="about-header text-center">About</p>
            <hr className="Phr" />
            <div className="user-details">
            <p className="profile-name text-center lg:text-start break-words text-xl p-1 ">Ankit Kumar lorem ipsum</p>
            <p className="profile-email text-center lg:text-start break-words text-l p-1 ">ankit.kumarniasdddd.eee20@itbhu.ac.in</p>
            <p className="profile-contact text-center lg:text-start break-words text-l p-1 ">+91123456789</p>
            </div>
            <div className="sign-out-btn  flex justify-center">
            <button class="link_404">Sign Out</button>
            </div>
            
            </div>
            
          <div className="dynamic-content m-2 min-h-[60vh] bg-sky-50 rounded-2xl  lg:w-8/12">
            <div className="profilenav flex">
              <div
                className={`Pnavchild px-4 ${addclass[0]}`}
                onClick={() => {
                  setvalue(<Profileevent />);
                  handleevent(0);
                }}
              >
                Events
              </div>
              <div
                className={`Pnavchild px-4 ${addclass[1]}`}
                onClick={() => {
                  setvalue(<Profileteam />);
                  handleevent(1);
                }}
              >
                Teams
              </div>
              <div
                className={`Pnavchild px-4 ${addclass[2]}`}
                onClick={() => {
                  setvalue(<Profilerequest />);
                  handleevent(2);
                }}
              >
                Requests
              </div>
            </div>
            <hr className="Phr" />
            {value}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profilepage;
