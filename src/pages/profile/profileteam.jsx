import React, {useState} from 'react';
import "./profilecss.css";
import "./profileteamcss.css"
import { ChevronDown } from "react-bootstrap-icons";


const Profileteam = () => {
const [value,setvalue] = useState(false)
  return (
    <> <div className="Pmaincontainer">
    <div className="Pcontainer">
      <div className="Pchildteam">
        <div className="psubchild1team" style={{backgroundImage: 'url("https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png")',
       backgroundRepeat: "no-repeat"}}></div>
        <div className="psubchildteam">
          <div className="pevent">
            <span className="eventname" >Team Blaze &nbsp;&nbsp;&nbsp;<ChevronDown style={{display:"inline-block"}} size={16} onClick={()=>{value?setvalue(false):setvalue(true)}}/></span>
            { value && <>
               <span className='teamname'>1 rahul</span>
               <span className='teamname'> 2 kumar</span>
               <span className='teamname'> 3 sonkar</span>
            </>}
          </div>
        </div>
      </div>
      
    </div>
  </div></>
  )
}

export default Profileteam