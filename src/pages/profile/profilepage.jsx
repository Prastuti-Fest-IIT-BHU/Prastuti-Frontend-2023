import React, { useState,useEffect } from "react";
import "./profilecss.css";
import Profileteam from "./profileteam";
import Profilerequest from "./Profilerequest";
import Profileevent from "./profileevent";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
const Profilepage = () => { 
  
  const [addclass, setaddclass] = useState(["onclicknav", "", ""]);
  const [team,setteam] = useState(null);
  const [event,setevent] = useState(null);
  const [request,setrequest] = useState(null);
  const [input, setinput] = useState([]);
  const [value, setvalue] = useState(null);

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
  useEffect(()=>{
    if(localStorage.getItem("loginData")){
      const gettingData = async()=>{
        const {data} = await axios.get(`http://localhost:8000/api/user/${localStorage.getItem("loginData")}`)
          setinput(data[0]);
          setteam(data[0].Teams);
          setevent(data[0].Events_Participated)
          setvalue(<Profileevent event={data[0].Events_Participated} />)
          setrequest(data[0].Pending_Requests);
         
      } 
      gettingData();
    } else {
      window.location.replace("/")
      
    }   

  },[])

  if (!localStorage.getItem('loginData')){
    window.location.replace("/");
    return;
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
            <div className="profilechild imgprofile"><img className="imgprofile" src={input.Profile_Photo} alt="user" /></div>
            <div className="profilechild">
              <div className="Prodetails text-3xl font-bold text-black-900">{input.Name}</div>
              <div className="Prodetails hidden md:flex text-l font-normal text-black-900">{input.email_id}</div>

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
            <p className="profile-name text-center lg:text-start break-words text-xl p-1 ">{input.Name}</p>
            <p className="profile-email text-center lg:text-start break-words text-l p-1 ">{input.email_id}</p>
            <p className="profile-contact text-center lg:text-start break-words text-l p-1 ">+91{input.Phone}</p>
            </div>
            <div className="sign-out-btn  flex justify-center">
            <button class="link_404" onClick={()=>{
              localStorage.removeItem("loginData")
              window.location.replace("/")
            }}>Sign Out</button>
            </div>
            
            </div>
            
          <div className="dynamic-content m-2 min-h-[60vh] bg-sky-50 rounded-2xl  lg:w-8/12">
            <div className="profilenav flex">
              <div
                className={`Pnavchild px-4 ${addclass[0]}`}
                onClick={() => {
                  setvalue(<Profileevent event={event} />);
                  handleevent(0);
                }}
              >
                Events
              </div>
              <div
                className={`Pnavchild px-4 ${addclass[1]}`}
                onClick={() => {
                  setvalue(<Profileteam team={team} />);
                  handleevent(1);
                }}
              >
                Teams
              </div>
              <div
                className={`Pnavchild px-4 ${addclass[2]}`}
                onClick={() => {
                  setvalue(<Profilerequest request={request} team={team}/>);
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
