import React from 'react'
import "../profile.css"
import  Tilt  from 'react-parallax-tilt'
import { motion} from 'framer-motion'
import videobg from "../assets/bgvideo.mp4"
const Profile = () => {
  return (
    <div className='Pmaincontainer'>
      <video src={videobg} autoPlay muted loop className="Pvideo"></video>
      <Tilt>
      <motion.div initial={{scale:0}}
      animate={{scale:1,
        transition:{
         delay:1,
         type: "spring",
         damping: 40,
         stiffness: 400,}}} 
      className='psubchild1 psubchild'>
        <img src="https://lh3.googleusercontent.com/a/ALm5wu17IJyLBxJFuJy2mUGlmoODblMOUBLQRJgsOh6t=s96-c"alt='userphoto' className='Pimage'/>
        
        <h1 style={{textAlign:"center" ,borderBottom:"3px solid white" ,color:"white"}}>My profile</h1>
        <div className='Profiledetail'>
          <span className='Pspan'>Rahul Kumar Sonkar</span>
          <br />
          <span className='Pspan'>+916387738430</span>
          <br />
          <span className='Pspan'>rahul.kumarsonkar.eee21@itbhu.ac.in</span>
          <br />
        </div>
      </motion.div>
      </Tilt>
      <div className='Psubparent' >
            <Tilt>
            <motion.div 
            initial={{y:"-100vh"}}
             animate={{y:0,
              transition:{
               delay:1.2,
               type: "spring",
               damping: 40,
               stiffness: 400,
                 }}} 
                  
             className='psubchild2 psubchild'>
               <h1 style={{color:"white",textAlign:"center"}}>
                 Events Joined
                 </h1><hr color='white'/>
                 <ol list-style-type="1" className='Peventol'>
                   <li>Consilium</li>
                   <li>Codigo</li>
                   <li>Cryptex</li>
                 </ol>
             </motion.div>
            </Tilt>
            <Tilt>
            <motion.div 
            initial={{y:"100vh"}}
             animate={{y:0,
              transition:{
               delay:1.2,
               type: "spring",
               damping: 40,
               stiffness: 400, }}} 
             className='psubchild3 psubchild'>
            <h1 style={{textAlign:"center",color:"white"}}>
             Team Members
              </h1><hr color='white'/>
              <ol list-style-type="1" className='Pteamol'>
                <li>Rahul Kumar Sonkar <br />rahul.kumarsonkar.eee21@itbhu.ac.in</li>
                <li>Rahul Kumar Sonkar <br />rahul.kumarsonkar.eee21@itbhu.ac.in</li>
                <li>Rahul Kumar Sonkar <br />rahul.kumarsonkar.eee21@itbhu.ac.in</li>
              </ol>
             </motion.div>
            </Tilt>
      </div>
    </div>
  )
}

export default Profile