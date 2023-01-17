import React, { useState } from "react";
import "./profilecss.css";
import "./profileteamcss.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Requestsent = (prop)=>{
  const [email,setemail] = useState(null);
  const sendRequest = async (id) => {
    try {
    const response = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/api/request/`, {
        recepient_email: email,
        team_id: id,
        user_id: localStorage.getItem("loginData"),
      });
      alert(response.data.message);
 
window.location.reload(true);

    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (<><div className="eventname">
  <input type="text" name="member"  autoComplete="off" placeholder="Recipient email" style={{fontSize:"1rem"}} value={email} onChange={(e)=>{setemail(e.target.value)}} />
</div>
<div className="sign-out-btn  flex justify-center"  >
<button class="link_404" onClick={()=>sendRequest(prop.id)} style={{fontSize:"1rem",marginTop:"13px",marginBottom:"5px",marginLeft:"-2rem",width:"fit-content",height:"max-content",padding:"5px"}}>Add Members</button>
</div></>)
}

const Profileteam = (prop) => {
  const [value, setvalue] = useState(null);
  const createTeam = async () => {

    // Checking if form filled
    const {data} = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/api/user/${localStorage.getItem("loginData")}`);
    if(!data[0].isFormFilled){
      window.location.replace("/form");
      return;
    }

    try{if (value) {
      const response = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/api/teams`, {
        userID: localStorage.getItem("loginData"),
        Team_Name: value,
        Member_Count: 1,
      });
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
      // window.location.reload(true);
    } else {
      toast.error('Please write Team Name!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }}
   catch(error){
    alert(error.response.data.message)
   }

  };
  return (
    <>
      <div className="Pmaincontainer">
        <div className="Pcontainer">
          {prop.team.map((data, index) => {
            return (
              <div className="Pchildteam" key={index}>
                <div
                  className="psubchild1team"
                  style={{
                    backgroundImage:
                      'url("https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png")',
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="psubchildteam">
                  <div className="pevent">
                    <span className="eventname">
                      {data.Team_Name} &nbsp;&nbsp;&nbsp;
                    </span>
                    {data.Members.map((item, ind) => {
                      return (
                        <span className="teamname" key={ind} style={{fontSize:"1rem"}} >
                          {ind + 1} {item.Name}
                        </span>
                      );
                    })}
                    { data.Members.length===3?null: <Requestsent id={data._id}/>
            }
                 
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
                    name="team" style={{marginTop:"10px"}}
                    onChange={(e) => {
                      setvalue(e.target.value);
                    }}
                  />
                </span>
                <div className="sign-out-btn  flex justify-center">
                  <button class="link_404"  style={{fontSize:"1rem",marginTop:"13px",marginBottom:"5px",marginLeft:"-2rem",width:"fit-content",height:"max-content",padding:"10px"}} onClick={createTeam}>
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
