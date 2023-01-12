import React,{useState} from 'react';
import "./profilecss.css";
import "./profileteamcss.css"
import axios from 'axios';


const Profilerequest = (prop) => {
  const [teamname,setteamname] = useState(null);
  const [email,setemail] = useState(null);
   console.log(prop.team);
   const sendRequest = async(id)=>{
    try {
      await axios.post("http://localhost:8000/api/request/",
      {
        "recepient_email":email,
        "team_id":id,
        "user_id":localStorage.getItem("loginData")
    })
    alert("request send")
      
    } catch (error) {
      alert(error)
    }
   }
   const requestData = ()=>{
        const checkId = prop.team.find(({ Team_Name }) => Team_Name === teamname)
        if(checkId){
          sendRequest(checkId)
        }
        else{
          alert("Please enter right name of team")
        }
   }
  return (
    <> <div className="Pmaincontainer">
    <div className="Pcontainer">
      <div className=" Pchildteam prequest">
        <div className="prequestchild">Team Blanze</div>
        <div className="prequestchild preqaccept">Accept</div>
      </div>
      {/* <div className=" Pchildteam prequest">
        <div className="prequestchild">Team Blanze</div>
        <div className="prequestchild preqaccept">Accept</div>
      </div> */}
      <div className=" Pchildteam prequest">
        <div className="prequestchild">Team Blanze</div>
        <div className="prequestchild preqaccept">
          <span>yes</span>&nbsp;&nbsp;
          <span>No</span>
        </div>
      </div>
      <div className=" Pchildteam">
        <div className="prequestchild"><input type="text" name="Team" placeholder='Team Name' onChange={(e)=>{setteamname(e.target.value)}} /></div>
        <div className="prequestchild"><input type="text" name="email" placeholder='Recepient email' onChange={(e)=>{setemail(e.target.value)}} /></div>

        <div className="prequestchild preqaccept" style={{display:"flex",justifyContent:"space-evenly"}}>
          <span onClick={requestData}>yes</span>&nbsp;&nbsp;
          <span>No</span>
        </div>
      </div>
      
    </div>
  </div></>
  )
}

export default Profilerequest