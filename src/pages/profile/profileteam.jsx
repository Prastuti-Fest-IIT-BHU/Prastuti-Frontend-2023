import React, {useState} from 'react';
import "./profilecss.css";
import "./profileteamcss.css"
import axios from "axios";

const Profileteam = (prop) => {
const [value,setvalue] = useState(null)
 
const createTeam = async()=>{
  if(value){
await axios.post(`http://localhost:8000/api/teams`,{
  "userID" : localStorage.getItem("loginData"),
  "Team_Name":value,
  "Member_Count":1
})
alert("Team created")
window.location.reload(true);
}
else{
  alert("Please write team name")
}
}

// console.log(prop.team);

  return (
    <> <div className="Pmaincontainer">
    <div className="Pcontainer">
      {
        prop.team.map((data,index)=>{
          return(<div className="Pchildteam" key={index}>
        <div className="psubchild1team" style={{backgroundImage: 'url("https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png")',
       backgroundRepeat: "no-repeat"}}></div>
        <div className="psubchildteam">
          <div className="pevent">
            <span className="eventname" >{data.Team_Name} &nbsp;&nbsp;&nbsp;</span> 
            {
              data.Members.map((item,ind)=>{
                return(<span className='teamname' key={ind}>{ind+1} {item.Name}</span>)
              })
            }          
          </div>
        </div>
      </div>)
        })
      }
      <div className="Pchildteam">
        <div className="psubchildteam">
          <div className="pevent">
               <span className='teamname'> <input type="text"placeholder='Team Name' name="team" onChange={(e)=>{setvalue(e.target.value)}}/></span>
               <div className="sign-out-btn  flex justify-center">
            <button class="link_404" onClick={createTeam}>Create Team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default Profileteam



