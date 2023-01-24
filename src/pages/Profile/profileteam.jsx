import React, { useState } from "react";
import "./profilecss.css";
import "./profileteamcss.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/loader";

// toast.configure();

const Requestsent = (prop) => {
  const [email, setemail] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("");

  const showLoaderWithMessage = (message) => {
    setLoaderText(message);
    setShowLoader(true);
  };

  const hideLoader = () => {
    setShowLoader(false);
  };

  const sendRequest = async (id) => {
    try {
      showLoaderWithMessage("Sending Request");
      const response = await axios.post(
        `${process.env.REACT_APP_SECRET_KEY}/api/request/`,
        {
          recepient_email: email,
          team_id: id,
          user_id: localStorage.getItem("loginData"),
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

      setemail("");
      // window.location.reload(true);
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
  };
  return (
    <>
      {showLoader ? <Loader text={loaderText} /> : null}

      <div className="eventname">
        <input
          type="text"
          name="member"
          autoComplete="off"
          // placeholder="Recipient email"
          style={{ fontSize: "1rem" }}
          value={email} 
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div className="sign-out-btn  flex justify-center">
        <button
          class="link_404"
          onClick={() => sendRequest(prop.id)}
          style={{
            fontSize: "1rem",
            marginTop: "13px",
            marginBottom: "5px",
            marginLeft: "-2rem",
            width: "fit-content",
            height: "max-content",
            padding: "5px",
          }}
        >
          Add Members
        </button>
      </div>
    </>
  );
};

const Profileteam = (prop) => {
  const [value, setvalue] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("");

  const showLoaderWithMessage = (message) => {
    setLoaderText(message);
    setShowLoader(true);
  };

  const hideLoader = () => {
    setShowLoader(false);
  };

  // console.log(prop);

  const createTeam = async () => {
    // Checking if form filled
    if (!prop.data) {
      window.location.replace("/form");
      return;
    }

    try {
      if (value) {
        showLoaderWithMessage("Creating Team");
        const response = await axios.post(
          `${process.env.REACT_APP_SECRET_KEY}/api/teams`,
          {
            userID: localStorage.getItem("loginData"),
            Team_Name: value,
            Member_Count: 1,
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
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      } else {
        toast.error("Please write the Team Name!", {
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
  };
  return (
    <>
      <div className="Pmaincontainer">
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
        <div className="Pcontainer">
          {prop.team.map((data, index) => {
            return (
              <div className="Pchildteam" key={index}>
                <div
                  className="psubchild1team"
                  style={{
                    backgroundImage:
                    `url("/profile/team.jpg")`,
                  }}
                ></div>
                <div className="psubchildteam">
                  <div className="pevent">
                    <span className="eventname">
                      {data.Team_Name} &nbsp;&nbsp;&nbsp;
                    </span>
                    {data.Members.map((item, ind) => {
                      return (
                        <span
                          className="teamname truncate"
                          key={ind}
                          style={{ fontSize: "1rem" }}
                        >
                          {ind + 1}. {item.Name}
                        </span>
                      );
                    })}
                    {/* {console.log("test")}
                    {console.log(data.Events_Participated.length)} */}
                    {data.Members.length >= 3? null : (
                      <Requestsent id={data._id} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="Pchildteam">
            <div className="psubchildteam">
              <div className="pevent">
                <span className="teamname">
                  <input
                    type="text"
                    placeholder="Team Name"
                    autoComplete="off"
                    name="team"
                    style={{ marginTop: "10px" }}
                    onChange={(e) => {
                      setvalue(e.target.value);
                    }}
                  />
                </span>
                <div className="sign-out-btn  flex justify-center">
                  <button
                    class="link_404"
                    style={{
                      fontSize: "1rem",
                      marginTop: "13px",
                      marginBottom: "5px",
                      marginLeft: "-2rem",
                      width: "fit-content",
                      height: "max-content",
                      padding: "10px",
                    }}
                    onClick={createTeam}
                  >
                    Create Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileteam;
