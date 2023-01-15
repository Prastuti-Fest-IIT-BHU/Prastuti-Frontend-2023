import * as React from "react";
import "../profile.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import videobg from "../assets/bgvideo.mp4";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="psubchild"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Team Members
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol list-style-type="1">
          <li>{props.value.first}</li>
          <li>{props.value.second}</li>
          <li>{props.value.third}</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const Profile = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const modelvalue = {
    first:"Ramesh",
    second:"Rajesh",
    third:"Shuresh"
  }
  return (
    <div className="Pmaincontainer">
      <video src={videobg} autoPlay muted loop className="Pvideo"></video>
      <Tilt>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: 1,
              type: "spring",
              damping: 40,
              stiffness: 400,
            },
          }}
          className="psubchild1 psubchild"
        >
          <img
            src="https://lh3.googleusercontent.com/a/ALm5wu17IJyLBxJFuJy2mUGlmoODblMOUBLQRJgsOh6t=s96-c"
            alt="userphoto"
            className="Pimage"
          />

          <h1 className="Pheadingh1">
            My profile
          </h1>
          <hr color="white"  />
          <div className="Profiledetail">
            <span className="Pspan">Rahul Kumar Sonkar</span>
            <br />
            <span className="Pspan">+916387738430</span>
            <br />
            <span className="Pspan">rahul.kumarsonkar.eee21@itbhu.ac.in</span>
            <br />
          </div>
        </motion.div>
      </Tilt>
      <div className="Psubparent">
        <Tilt>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{
              y: 0,
              transition: {
                delay: 1.2,
                type: "spring",
                damping: 40,
                stiffness: 400,
              },
            }}
            className="psubchild2 psubchild"
          >
            <h1 className="Pheadingh1">
              Events Registered
            </h1>
            <hr color="white" />
            <ol list-style-type="1" className="Peventol">
              <li>
                Consilium -
                <span>
                  <a
                    href="https://chat.whatsapp.com/BAGcuI60jIIKYaUCcEkLuI"
                    className="PwhatsAppLink"
                  >
                    Join Whatsapp Group
                  </a>
                </span>
              </li>
              <li>
                Codigo -
                <span>
                  <a
                    href="https://chat.whatsapp.com/BAGcuI60jIIKYaUCcEkLuI"
                    className="PwhatsAppLink"
                  >
                    Join Whatsapp Group
                  </a>
                </span>
              </li>
              <li>
                Cryptex -
                <span>
                  <a
                    href="https://chat.whatsapp.com/BAGcuI60jIIKYaUCcEkLuI"
                    className="PwhatsAppLink"
                  >
                    Join Whatsapp Group
                  </a>
                </span>
              </li>
            </ol>
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
              transition: {
                delay: 1.4,
                type: "spring",
                damping: 40,
                stiffness: 400,
              },
            }}
            className="psubchild3 psubchild"
          >
            <h1 className="Pheadingh1">
              Team Members
            </h1>
            <hr color="white" />
            <ol list-style-type="1" className="Pteamol">
              <li>
                Crazzy_123 -
                <span
                  onClick={() => setModalShow(true)}
                  className="PwhatsAppLink"
                >
                  know your members
                </span>
                <MyVerticallyCenteredModal
        show={modalShow} value={modelvalue}
        onHide={() => setModalShow(false)}
      />
              </li>
              <li>
                Crazzy_123 -
                <span
                  onClick={() => setModalShow(true)}
                  className="PwhatsAppLink"
                >
                  know your members
                </span>
              </li>
              <li>
                Crazzy_123 -
                <span
                  onClick={() => setModalShow(true)}
                  className="PwhatsAppLink"
                >
                  know your members
                </span>
              </li>
            </ol>

            <div class="text-center">
              <a href="/createteam">
                
                <Button variant="outline-light" center>
                  Create Team
                </Button>
              </a>
            </div>
            <div className="Ppending">
              <span style={{ fontSize: "larger" }}>Pending request</span> -
              <span>no pending request</span>
            </div>
          </motion.div>
        </Tilt>
      </div>
      
    </div>
  );
};

export default Profile;
