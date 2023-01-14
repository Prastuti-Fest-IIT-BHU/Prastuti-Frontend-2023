import React, { useState, useEffect } from "react";
import "./profilecss.css";
import "./profileteamcss.css";
import { Check2 } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";


import axios from "axios";

const RequestCard = (prop) => {
  const [value, setvalue] = useState(null);
  const gettingteam = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/api/teams/${prop.data.team}`
    );
    setvalue(data.team.Team_Name);
  };
  useEffect(() => {
    gettingteam();
  },[]);
  const acceptRequest = async () => {
    await axios.post(`${process.env.REACT_APP_SECRET_KEY}/api/request/accept`, {
      requestId: prop.data._id,
    });
    alert("Accepted Request");
    window.location.reload(true);
  };

  const deleterequset = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_SECRET_KEY}/api/request/`, {
        data: { requestId: prop.data._id },
      });
      alert("Rejected Request");
      window.location.reload(true);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className=" Pchildteam prequest">
      <div className="prequestchild">{value}</div>
      <div className="prequestchild preqaccept" style={{backgroundColor:"transparent"}}>
        <span onClick={acceptRequest}><Check2 style={{color:"green",display:"inline"}}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={deleterequset}><XLg style={{color:"red",display:"inline"}}/></span>
      </div>
    </div>
  );
};

const Profilerequest = (prop) => {
  return (
    <>
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
