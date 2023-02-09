import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SeperateEvents.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/loader";
import Modal from "../../components/Modal/Modal";

const Separate_Event = ({ data }) => {
  const Eventitle = data.title;
  console.log(Eventitle);
  const [eventName, seteventEame] = useState(null);
  const [result, setresult] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("");
  const [modal, setModal] = useState(false)
  const handleModal = (value) => setModal(value)

  const showLoaderWithMessage = (message) => {
    setLoaderText(message);
    setShowLoader(true);
  };

  const hideLoader = () => {
    setShowLoader(false);
  };

  const getEvent = async () => {
    showLoaderWithMessage("Fetching Details");
    const { data } = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/api/events`
    );
    seteventEame(
      data.events.find(({ Name }) => Name === Eventitle).no_of_participants
    );
    setresult(data.events.find(({ Name }) => Name === Eventitle));
    hideLoader();
  };

  useEffect(() => {
    getEvent();
  }, []);

  const findingteam = async (name) => {
    showLoaderWithMessage("Registering");
    const { data } = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/api/teams`
    );

    const verifiedname = data.teams.find(({ Team_Name }) => Team_Name === name);

    if (verifiedname) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/api/teamRegistration`,
          {
            user_id: localStorage.getItem("loginData"),
            event_id: result._id,
            team_id: verifiedname._id,
          }
        );
        hideLoader();
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        //Shall I redirect ?????
        // setTimeout(() => {
        //   window.location.replace("/profile")
        // }, 1500)
      } catch (error) {
        hideLoader();
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      hideLoader();
      toast.error("Please enter existing team name.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  //  console.log(result._id);
  const register = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/api/user/${localStorage.getItem(
        "loginData"
      )}`
    );
    if (!data[0].isFormFilled) {
      window.location.replace("/form");
    }

    if (!result.team_event) {
      try {
        showLoaderWithMessage("Registering");
        const response = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/api/soloRegistration`,
          {
            user_id: localStorage.getItem("loginData"),
            event_id: result._id,
          }
        );
        hideLoader();
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        //Shall I redirect ?????
        setTimeout(() => {
          window.location.replace("/profile");
        }, 1500);
      } catch (error) {
        hideLoader();
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    if (result.team_event) {
      handleModal(true)
      // let teamName = prompt(
      //   "Please enter your team name that you have created in profilepage",
      //   "team name"
      // );
      // findingteam(teamName);
      const teamdata = result.teams.find(({ Name }) => Name === teamName);
    }
  };
  return (
    <>
      {showLoader ? <Loader text={loaderText} /> : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        className="min-h-screen min-w-screen m-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imgpath})` }}
      >
        <div className=" min-h-screen w-full md:w-3/5 lg:w-[45%] bg-black md:opacity-[0.8] opacity-[0.7] text-white p-[3rem]">
          <h1 className="font-bold text-3xl md:text-2xl mt-10 mb-4 font-[Poppins]">
            {data.title}
          </h1>
          <h2 className="md:text-xl xl:text-2xl mb-4 text-[#29ffff] font-[Poppins] text-lg">
            {data.subtitle}
          </h2>
          <p className="md:text-md xl:text-lg text-justify font-[Nunito] text-md mb-4">
            {data.eventInfo}
          </p>
          <h3 className="md:text-md xl:text-lg text-justify font-[Nunito] text-md">
            Participants : <span>{eventName}</span>
          </h3>
          
          {/* {result.team_event && <div className="font-[Nunito] mt-[1em] font-bold"> Team Event</div> }
          {!result.team_event && <div className="font-[Nunito] mt-[1em] font-bold">  Solo Event</div> } */}
          {localStorage.getItem("loginData") ? (
            <Link onClick={register}>
              <button
                className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  "
              >
                Register
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  "
              >
                Register
              </button>
            </Link>
          )}
          <div className="conduct"> <a href="https://github.com/Prastuti-Fest-IIT-BHU/Prastuti-Frontend-2023/blob/main/public/code_of_conduct.md" target="_blank" rel="noreferrer">Code of Conduct</a></div>
        </div>
        
      </div>
      <Modal modal={modal}
        handleModal={handleModal}>
        <div className="flex flex-col rounded-md">
          <label for="user-team" className="p-2">Please enter your team name that you have created in profilepage</label>
          <input onChange={(e) => setTeamName(e.target.value)} id="user-team" type="text" className="p-2" placeholder="TeamName"></input>
          <button className="p-2 flex  justify-end" onClick={() => { handleModal(false); findingteam(teamName) }}>Submit</button>
        </div>
      </Modal>
      
    </>
  );
};
export default Separate_Event;
