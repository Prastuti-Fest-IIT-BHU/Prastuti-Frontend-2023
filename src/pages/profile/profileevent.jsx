import React from 'react'
import "./profilecss.css";
import { Speedometer2 } from "react-bootstrap-icons";
import { Calendar2Check } from "react-bootstrap-icons";
const profileevent = () => {
  return (
    <> <div className="Pmaincontainer">
    <div className="Pcontainer">
      <div className="Pchild">
        <div className="psubchild1" style={{backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.Wo0bMz8lk_fKOloqwx8OQQHaHa&pid=Api&P=0")',
       backgroundRepeat: "no-repeat"}}></div>
        <div className="psubchild">
          <div className="pevent">
            <span className="eventname">Codigo</span>
            <span className="eventteam">Team Blaze</span>
            <span className="eventinfo" >
              <div>
               <div style={{position:"relative",top:"3px",left:"-3px"}}> <Speedometer2 /></div>
                220
              </div>
              &nbsp; &nbsp; &nbsp;
              <div>
                <div style={{position:"relative",top:"3px",left:"-3px"}}><Calendar2Check /></div>
                12/12/2022
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default profileevent