import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import './SeperateEvents.css'
import axios from "axios";
const Separate_Event = ({data}) => {
  const Eventitle= data.title
  console.log(Eventitle);
   const [eventName,seteventEame] =useState(null);
   const [result,setresult] =useState(null);
   const [team,setteam]=useState(null);
   const getEvent = async()=>{
    const {data} =  await axios.get("https://prastuti-2023.onrender.com/api/events");
    // console.log(data.events);
    seteventEame(data.events)
     
    setresult(data.events.find(({ Name }) => Name === Eventitle))
    
   }
  //  console.log(result);
   useEffect(()=>{
    getEvent()
   },[])
   const findingteam = async(name)=>{
    const {data} = await axios.get(`http://localhost:8000/api/teams`)
      
  const verifiedname =data.teams.find((({Team_Name})=>Team_Name===name))
  // console.log(result._id)
  console.log(localStorage.getItem("loginData"));
  console.log(result._id);


     if(verifiedname){
           try {
               await axios.post(`http://localhost:8000/api/teamRegistration`,{
                "user_id": localStorage.getItem("loginData"),
                "event_id": result._id,
                "team_id": verifiedname._id
            })
            alert("Registered successfully");
            window.location.replace("/profile")
           } catch (error) {
            alert(error)
           }
     }
     else
     {
      alert("Please enter existing team name")
     }

   }
   const register =async()=>{
    console.log("regi");
        if(!result.team_event){
          try{ await axios.post(`https://prastuti-2023.onrender.com/api/soloRegistration`,{
            "user_id": localStorage.getItem("loginData"),
            "event_id": result._id
        })
          alert("successfully registered"); 
          window.location.replace("/profile");}
          catch(error){
            alert(error)
          }
        }
        if(result.team_event){
          console.log("else");
          let teamName = prompt("Please enter your team name that you have created in profilepage","team name")
          // console.log(result.teams);
          findingteam(teamName)
           const teamdata = result.teams.find(({ Name }) => Name === teamName)
          //  console.log(teamdata);
        }

   }
      return(
        <>
          <div className="min-h-screen min-w-screen m-0 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${data.imgpath})`}} >
              <div className=" min-h-screen w-full md:w-3/5 lg:w-[45%] bg-black md:opacity-[0.8] opacity-[0.7] text-white p-[3rem]">
                <h1 className= "font-bold text-xl xl:text-3xl md:text-2xl mt-10 mb-4 font-Manrope" >{data.title}</h1>
                <h2 className="md:text-xl xl:text-2xl mb-4 text-[#29ffff] font-Manrope text-lg">{data.subtitle}</h2>
                <p className="md:text-md xl:text-lg text-justify font-Catamaran text-md mb-4">{data.eventInfo}</p>
                <h3 className="md:text-md xl:text-lg text-justify font-Catamaran text-md">Participants : <span>000</span></h3>
                {localStorage.getItem("loginData")?<Link  onClick={register}>
                  <button className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  " >Register</button>
                </Link>:<Link to='/login'>
                  <button className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  " >Register</button>
                </Link>}
              </div>
          </div>
        </>
    );
}
export default Separate_Event;
