import React, { useState, useEffect } from "react";
import "./profilecss.css";
import "./profileteamcss.css";
import { Check2 } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/loader";

import axios from "axios";

const RequestCard = (prop) => {
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

  const gettingteam = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/api/teams/${prop.data.team}`
    );
    setvalue(data.team.Team_Name);
  };
  useEffect(() => {
    gettingteam();
  }, []);
  const acceptRequest = async () => {
    showLoaderWithMessage("Accepting Request");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SECRET_KEY}/api/request/accept`,
        {
          requestId: prop.data._id,
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

  const deleteRequset = async () => {
    try {
      showLoaderWithMessage("Declining Request");
      const response = await axios.delete(
        `${process.env.REACT_APP_SECRET_KEY}/api/request/`,
        {
          data: { requestId: prop.data._id },
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
      <div className=" Pchildteam prequest">
        <div className="prequestchild">{value}</div>
        <div
          className="prequestchild preqaccept"
          style={{ backgroundColor: "transparent" }}
        >
          <span onClick={acceptRequest}>
            <Check2 style={{ color: "green", display: "inline" }} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={deleteRequset}>
            <XLg style={{ color: "red", display: "inline" }} />
          </span>
        </div>
      </div>
    </>
  );
};

const Profilerequest = (prop) => {
  return (
    <>
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
      <div className="Pmaincontainer">
        <div className="Pcontainer">
          {prop.request.map((data, index) => {
            return <RequestCard key={index} team={prop.team} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Profilerequest;
