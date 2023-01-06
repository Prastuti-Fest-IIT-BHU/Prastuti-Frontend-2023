import React, { useState } from "react";
import "./profilecss.css";
import Profileteam from "./profileteam";
import Profilerequest from "./Profilerequest";
import Profileevent from "./profileevent";
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
        <div className="myprofile">
          <div className="profilechild imgprofile"><img  className="imgprofile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" /></div>
          <div className="profilechild">
            <span className="Prodetails">rahul kumar sonkar</span>
            <span className="Prodetails">rahul.kumarsonkar.eee21@itbhu.ac.in</span>
            <span className="Prodetails">iit bhu</span>
            <span className="Prodetails">6387738430</span>
          </div>
        </div>
        <div className="profilenav">
          <div
            className={`Pnavchild ${addclass[0]}`}
            onClick={() => {
              setvalue(<Profileevent />);
              handleevent(0);
            }}
          >
            Events
          </div>
          <div
            className={`Pnavchild ${addclass[1]}`}
            onClick={() => {
              setvalue(<Profileteam />);
              handleevent(1);
            }}
          >
            Teams
          </div>
          <div
            className={`Pnavchild ${addclass[2]}`}
            onClick={() => {
              setvalue(<Profilerequest/>);
              handleevent(2);
            }}
          >
            Requests
          </div>
        </div>
        <hr className="Phr" />
        {value}
      </div>
    </>
  );
};

export default Profilepage;
