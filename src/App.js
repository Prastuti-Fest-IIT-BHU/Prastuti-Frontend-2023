import Sponsor from "./components/Sponser/Sponsor";
import Register from "./components/Register";
import Teams from "./components/Teams";
import Faq from '././components/Faq'
import Intro from "./components/Intro";

export default function App() {
  return (
    <>
      <Intro/>
      <Register />
      <Teams />
      <Faq/>
      <Sponsor/>

    </>
  );
}